const fs = require('fs');
const path = require('path');

function findFiles(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      findFiles(filePath); // Rekursiver Aufruf für Unterordner
    } else {
      console.log(filePath);
    }
  }
}

if (process.argv.length <= 2) {
  console.log('Bitte geben Sie den Ordnerpfad an.');
  process.exit(1);
}

const folderPath = process.argv[2];

findFiles(folderPath);
