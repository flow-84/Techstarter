const express = require('express');
const app = express();
const port = 5000;

// Middleware zum Parsen von JSON-Daten
app.use(express.json());

// In-memory Liste für Restaurants
let restaurants = [];

// GET-Endpunkt für die Liste aller Restaurants
app.get('/restaurants', (req, res) => {
  res.json(restaurants);
});

// POST-Endpunkt zum Speichern eines neuen Restaurants
app.post('/restaurant', (req, res) => {
  const { name, address, category } = req.body;

  // Überprüfen, ob Name, Adresse und Kategorie im JSON-Objekt enthalten sind
  if (name && address && category) {
    // Überprüfen, ob das Restaurant bereits existiert
    const existingRestaurant = restaurants.find(r => r.name === name);
    if (existingRestaurant) {
      return res.status(409).json({ error: 'Restaurant already exists' });
    }

    // Restaurant zur Liste hinzufügen
    const newRestaurant = { name, address, category };
    restaurants.push(newRestaurant);

    return res.status(201).json(newRestaurant);
  } else {
    return res.status(400).json({ error: 'Missing fields' });
  }
});
app.post('/restaurant', (req, res) => {
    const { name, address, category } = req.body;
  
    if (!name || !address || !category) {
      return res.status(400).json({ error: 'Name, address, and category are required fields' });
    }
  
    const existingRestaurant = restaurants.find(restaurant => restaurant.name === name);
    if (existingRestaurant) {
      return res.status(409).json({ error: 'Restaurant already exists' });
    }
  
    const newRestaurant = { name, address, category };
    restaurants.push(newRestaurant);
  
    res.status(201).json(newRestaurant);
  });
  
// GET-Endpunkt für ein einzelnes Restaurant
app.get('/restaurant/:name', (req, res) => {
  const { name } = req.params;

  // Überprüfen, ob das Restaurant mit dem angegebenen Namen existiert
  const restaurant = restaurants.find(r => r.name === name);
  if (restaurant) {
    return res.json(restaurant);
  } else {
    return res.status(404).json({ error: 'Restaurant not found' });
  }
});

// PUT-Endpunkt zum Aktualisieren eines Restaurants
app.put('/restaurant/:name', (req, res) => {
  const { name } = req.params;
  const { address, category } = req.body;

  // Überprüfen, ob das Restaurant mit dem angegebenen Namen existiert
  const restaurant = restaurants.find(r => r.name === name);
  if (restaurant) {
    // Restaurant aktualisieren
    restaurant.address = address || restaurant.address;
    restaurant.category = category || restaurant.category;

    return res.json(restaurant);
  } else {
    return res.status(404).json({ error: 'Restaurant not found' });
  }
});

// DELETE-Endpunkt zum Löschen eines Restaurants
app.delete('/restaurant/:name', (req, res) => {
  const { name } = req.params;

  // Überprüfen, ob das Restaurant mit dem angegebenen Namen existiert
  const restaurantIndex = restaurants.findIndex(r => r.name === name);
  if (restaurantIndex !== -1) {
    // Restaurant aus der Liste entfernen
    const deletedRestaurant = restaurants.splice(restaurantIndex, 1)[0];
    return res.json(deletedRestaurant);
  } else {
    return res.status(404).json({ error: 'Restaurant not found' });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
