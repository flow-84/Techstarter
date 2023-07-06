const express = require('express');

const app = express();
const port = 3000;

// GET-Endpunkt /drink
app.get('/drink', async (req, res) => {
  try {
    const drink = await fetchInstructions(); // Aufruf der API-Funktion
    res.json(drink);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API-Funktion für die Getränkeanweisungen
function fetchInstructions() {
  return new Promise((resolve, reject) => {
    // Hier die Logik zum Abrufen der Getränkeanweisungen von der API einfügen
    // Beispiel:
    const drink = {
      name: 'Old Fashioned',
      ingredients: ['Whiskey', 'Bitters', 'Sugar', 'Orange Peel'],
      instructions: '1. Muddle sugar with bitters and water in a glass. 2. Add whiskey and ice. 3. Stir well. 4. Garnish with an orange peel.',
    };
    resolve(drink);
  });
}

// Start des Servers
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
