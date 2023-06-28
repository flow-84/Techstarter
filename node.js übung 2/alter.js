const chalk = require('chalk');

function sumAndLog(a, b) {
  const sum = a + b;
  const coloredSum = chalk.green(sum);
  const coloredName = chalk.blue('Mittra');
  console.log('Die Summe der Zahlen ist:', coloredSum);
  console.log('Mein Name ist:', coloredName);
}

module.exports = sumAndLog;
