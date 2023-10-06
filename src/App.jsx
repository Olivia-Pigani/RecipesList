import { useState } from "react";
import Api from "./api/Api";
import Display from "./components/Display";
import Recipe from "./classes/Recipe.js";

function App() {
  const [recettes, setRecettes] = useState([]);

  const handleRecipesToApp = (data) => {
    const recipes = data.map((recipe) => {
      return new Recipe(
        recipe.title,
        recipe.ingredients,
        recipe.servings,
        recipe.instructions
      );
    });

    console.log(recettes); // à l'instant t donc array vide
    console.log(data); // après que l'asynchrone soit executée donc rempli
  };

  return (
    <div className="App">
      <Api recipesToApp={handleRecipesToApp} />
      <Display data={recettes} />
    </div>
  );
}

export default App;
