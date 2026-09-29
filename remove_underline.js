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

  // Replace text-decoration: underline with text-decoration: none
  content = content.replace(/text-decoration:\s*underline;/gi, 'text-decoration: none;');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${file}`);
});
