const fs = require('fs');

if (process.argv.length <= 2) {
  console.log('Bitte geben Sie den Dateinamen an.');
  process.exit(1);
}

for (let i = 2; i < process.argv.length; i++) {
  const fileName = process.argv[i];

  if (!fs.existsSync(fileName)) {
    console.error(`Die Datei ${fileName} existiert nicht.`);
    continue;
  }

  try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    process.stdout.write(fileContent);
    process.stdout.write('\n');
  } catch (error) {
    console.error(`Fehler beim Lesen der Datei ${fileName}:`, error);
  }
}
