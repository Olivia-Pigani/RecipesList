import { useState } from "react";
import Api from "./api/Api";
import Display from "./components/Display";
import Recipe from "./classes/Recipe.js";
import Formular from "./components/Formular";
import StyleSheet from "./css/Style.module.css"

function App() {
  const [recettes, setRecettes] = useState([]);
  const [manageApiId, setmanageApiId] = useState(1)

  const handleRecipesToApp = (data) => {
    let nextId=manageApiId
    const newRecette = data.map((recipe) => {
      const newRecipe =  new Recipe(
        recipe.title,
        recipe.ingredients.split("|"),
        recipe.servings,
        recipe.instructions,
        nextId
      );
      nextId++
      return newRecipe
    });
    
    setmanageApiId((ancientId)=>ancientId+1)
          /* prevState est un paramètre qui rpz l'etat precedent de la variable d'etat recettes
      il y a la production d'un nouveau tableau, qui est une fusion de l'ancien tableau et la nouvelle data*/
      setRecettes(prevState => [...prevState,...newRecette])

    console.log(recettes); // à l'instant t donc array vide
    console.log(data); // après que l'asynchrone soit executée donc rempli
  };


  const handleDataFormToApp = (newRecipe) => {
    setRecettes(prevState=>([...prevState,...newRecipe]))
  }

  const handleDeleteItem = (id) => {
    const updatedRecettes = recettes.filter((recette) => recette.id !== id);

    setRecettes(updatedRecettes);
  }

  return (
    <div className={StyleSheet.App}>
      <Api recipesToApp={handleRecipesToApp} />
      <Display data={recettes} setRecettes={setRecettes} deleteItem={handleDeleteItem} />
      <Formular dataFormToApp={handleDataFormToApp}/>
    </div>
  );
}

export default App;
