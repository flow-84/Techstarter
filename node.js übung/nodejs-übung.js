const figlet = require('figlet');

// Benutzerdefinierte Optionen für die Schriftart
const fontOptions = {
  font: 'Dancing Font',
};

// Die zu konvertierende Nachricht
const message = 'Hallo, Welt!';

// Synchrones Rendern der Nachricht im "Dancing Font"
const renderedMessage = figlet.textSync(message, fontOptions);

// Ausgabe des Ergebnisses
console.log(renderedMessage);
