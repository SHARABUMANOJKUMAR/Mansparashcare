const fs = require('fs');
const path = require('path');

const files = [
  'about.html',
  'contact.html',
  'how-it-works.html',
  'index.html',
  'services.html',
  'sitemap.xml',
  'script.js',
  'style.css'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Clinical Psychologist
  content = content.replace(/clinical psychologists/gi, (match) => {
    // Preserve case if it was all caps, but usually we just want title case "Psychologists"
    return 'Psychologists';
  });
  
  content = content.replace(/clinical psychologist/gi, (match) => {
    return 'Psychologist';
  });

  // 2. Brand Name
  content = content.replace(/Mansparse Care/gi, 'Mansparshcare');
  content = content.replace(/Mansparsh Care/gi, 'Mansparshcare');
  // Handle URL variations if any, though Mansparshcare is the target.
  
  // 3. Pricing
  // ₹999 <span>/ session</span>
  content = content.replace(/₹999\s*<span>\/\s*session<\/span>/gi, '₹999 <span>/ First Session</span>');
  content = content.replace(/₹999\s*\/\s*session/gi, '₹999 / First Session');

  // 4. Footer Developer Watermark
  const footerWatermark = 'Developed by Shaivika IT technologies(<a href="https://shaivikaittechnologies.in" target="_blank" style="color: inherit;">Backend Link : shaivikaittechnologies.in</a>)';
  content = content.replace(/Developed by Shivashakthi IT Solutions/gi, footerWatermark);
  content = content.replace(/Developed by Shaivika Groups\s*/gi, footerWatermark);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
});
