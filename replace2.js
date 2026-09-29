const fs = require('fs');
const path = require('path');

const files = [
  'about.html',
  'contact.html',
  'how-it-works.html',
  'index.html',
  'services.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');

  const oldWatermark = 'Developed by Shaivika IT technologies(<a href="https://shaivikaittechnologies.in" target="_blank" style="color: inherit;">Backend Link : shaivikaittechnologies.in</a>)';
  const newWatermark = 'Developed by <a href="https://shaivikaittechnologies.in" target="_blank" style="color: inherit; text-decoration: underline;">Shaivika IT technologies</a>';
  
  // Just to be safe with escaping, we can use a more generic replace if needed, but since we know exactly what we put in, we can just replace the exact string.
  content = content.replace(oldWatermark, newWatermark);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
});
