import { topicReferences } from './src/content/topicReferences';
import fs from 'fs';

async function fetchCorrectPmid(title: string): Promise<string | null> {
  try {
    const encodedTitle = encodeURIComponent(title);
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodedTitle}[Title]&retmode=json`;
    const res = await fetch(url);
    const data = await res.json();
    
    if (data.esearchresult && data.esearchresult.idlist && data.esearchresult.idlist.length > 0) {
      return data.esearchresult.idlist[0];
    }
    
    // Fallback: search without [Title] tag if exact title match fails
    const fallbackUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodedTitle}&retmode=json`;
    const fallbackRes = await fetch(fallbackUrl);
    const fallbackData = await fallbackRes.json();
    
    if (fallbackData.esearchresult && fallbackData.esearchresult.idlist && fallbackData.esearchresult.idlist.length > 0) {
      return fallbackData.esearchresult.idlist[0];
    }
    
    return null;
  } catch (e) {
    console.log(`Error searching for "${title}":`, e);
    return null;
  }
}

async function run() {
  let fileContent = fs.readFileSync('src/content/topicReferences.ts', 'utf8');
  let fixedCount = 0;
  
  for (const moduleObj of Object.values(topicReferences)) {
    for (const refs of Object.values(moduleObj)) {
      for (const ref of refs) {
        if (ref.url && ref.url.includes('pubmed.ncbi.nlm.nih.gov')) {
          // It has a pubmed URL. Let's find the correct one.
          const oldUrl = ref.url;
          const oldPmidMatch = oldUrl.match(/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)/);
          const oldPmid = oldPmidMatch ? oldPmidMatch[1] : null;
          
          process.stdout.write(`Checking: "${ref.title.substring(0, 30)}..." `);
          
          // Wait 300ms to avoid rate limiting
          await new Promise(r => setTimeout(r, 340));
          
          const correctPmid = await fetchCorrectPmid(ref.title);
          
          if (correctPmid && correctPmid !== oldPmid) {
            console.log(`FIXED: ${oldPmid} -> ${correctPmid}`);
            // Replace in file
            const newUrl = `https://pubmed.ncbi.nlm.nih.gov/${correctPmid}/`;
            fileContent = fileContent.replace(`url: '${oldUrl}'`, `url: '${newUrl}'`);
            fixedCount++;
          } else if (correctPmid === oldPmid) {
            console.log(`OK (Already correct)`);
          } else {
            console.log(`NOT FOUND`);
          }
        }
      }
    }
  }
  
  if (fixedCount > 0) {
    fs.writeFileSync('src/content/topicReferences.ts', fileContent, 'utf8');
    console.log(`\nSuccessfully fixed ${fixedCount} PubMed links!`);
  } else {
    console.log(`\nNo links needed fixing or could not be found.`);
  }
}

run();
