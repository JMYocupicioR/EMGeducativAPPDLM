import { topicReferences } from './src/content/topicReferences';
import fs from 'fs';

const links: {title: string, url: string}[] = [];
let outputLog = "";
function log(msg: string) {
  console.log(msg);
  outputLog += msg + "\n";
}


for (const moduleObj of Object.values(topicReferences)) {
  for (const refs of Object.values(moduleObj)) {
    for (const ref of refs) {
      if (ref.url && (ref.url.includes('pubmed') || ref.url.includes('doi'))) {
        links.push({ title: ref.title, url: ref.url });
      }
    }
  }
}

console.log(`Found ${links.length} PubMed/DOI links to verify.`);

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
      log(`\n❌ MISMATCH DETECTED`);
      log(`Expected Title: ${link.title}`);
      log(`URL: ${link.url}`);
      log(`Page Title: ${pageTitle.substring(0, 100)}`);
      log(`Match Ratio: ${matchRatio.toFixed(2)}`);
    } else {
      process.stdout.write('.');
    }
  } catch (e: any) {
    log(`\n⚠️ ERROR fetching ${link.url}: ${e.message}`);
  }
}

async function run() {
  const batchSize = 10;
  for (let i = 0; i < links.length; i += batchSize) {
    const batch = links.slice(i, i + batchSize);
    await Promise.all(batch.map(checkLink));
  }
  log('\nDone checking links.');
  fs.writeFileSync('check_results.txt', outputLog, 'utf8');
}

run();
