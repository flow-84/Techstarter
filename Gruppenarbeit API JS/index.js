function fetchInstructions() {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=old_fashioned")
    .then(function(result) {
      return result.json();
    })
    .then(function(data) {
      return data.drinks[0].strInstructionsDE;
    });
}

// Verwendung der Funktion
fetchInstructions()
  .then(function(instructions) {
    console.log(instructions);
  })
  .catch(function(error) {
    console.error(error);
  });
