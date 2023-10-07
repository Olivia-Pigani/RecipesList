import { useState } from "react";
import Api from "./api/Api";
import Display from "./components/Display";
import Recipe from "./classes/Recipe.js";
import Formular from "./components/Formular";

function App() {
  const [recettes, setRecettes] = useState([]);

  const handleRecipesToApp = (data) => {
    const newRecette = data.map((recipe) => {
      return new Recipe(
        recipe.title,
        recipe.ingredients.split("|"),
        recipe.servings,
        recipe.instructions
      );
    });

          /* prevState est un paramètre qui rpz l'etat precedent de la variable d'etat recettes
      il y a la production d'un nouveau tableau, qui est une fusion de l'ancien tableau et la nouvelle data*/
      setRecettes(prevState => [...prevState,...newRecette])

    console.log(recettes); // à l'instant t donc array vide
    console.log(data); // après que l'asynchrone soit executée donc rempli
  };


  const handleDataFormToApp = (newRecipe) => {
    setRecettes(prevState=>([...prevState,...newRecipe]))
  }

  return (
    <div className="App">
      <Api recipesToApp={handleRecipesToApp} />
      <Display data={recettes} />
      <Formular dataFormToApp={handleDataFormToApp}/>
    </div>
  );
}

export default App;
