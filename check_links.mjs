import fs from 'fs';

const content = fs.readFileSync('c:/Users/JmYoc/OneDrive/Documentos/DeepLuxMed/ClasesEMG/EMGeducativAPPDLM/src/content/topicReferences.ts', 'utf-8');

// Regex to find title and url
const regex = /title:\s*'([^']+)',.*?url:\s*'([^']+)'/gs;
let match;
const links = [];

while ((match = regex.exec(content)) !== null) {
  links.push({ title: match[1], url: match[2] });
}

console.log(`Found ${links.length} links to verify.`);

async function checkLink(link) {
  try {
    const res = await fetch(link.url);
    const text = await res.text();
    
    // Extract title from HTML
    const titleMatch = text.match(/<title[^>]*>(.*?)<\/title>/i);
    const pageTitle = titleMatch ? titleMatch[1].toLowerCase() : '';
    
    // Create keywords from expected title
    const keywords = link.title.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 3);
    
    let matchCount = 0;
    for (const kw of keywords) {
      if (pageTitle.includes(kw) || text.toLowerCase().includes(kw)) {
        matchCount++;
      }
    }
    
    const matchRatio = matchCount / keywords.length;
    
    if (matchRatio < 0.5) {
      console.log(`\n❌ MISMATCH DETECTED`);
      console.log(`Expected Title: ${link.title}`);
      console.log(`URL: ${link.url}`);
      console.log(`Page Title: ${pageTitle.substring(0, 100)}`);
      console.log(`Match Ratio: ${matchRatio.toFixed(2)}`);
    } else {
      process.stdout.write('.');
    }
  } catch (e) {
    console.log(`\n⚠️ ERROR fetching ${link.url}: ${e.message}`);
  }
}

async function run() {
  const batchSize = 5;
  for (let i = 0; i < links.length; i += batchSize) {
    const batch = links.slice(i, i + batchSize);
    await Promise.all(batch.map(checkLink));
  }
  console.log('\nDone checking links.');
}

run();
