import { useState } from "react";
import Recipe from "../classes/Recipe";
import StyleSheet from "../css/Style.module.css"

const Formular = ({ dataFormToApp }) => {
  const [dataForm, setDataForm] = useState({
    title: "",
    ingredients: "",
    servings: "",
    instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitRecipeForm = (e) => {
    e.preventDefault();

    const newRecipe = new Recipe(
      dataForm.title,
      dataForm.ingredients.split("|"),
      dataForm.servings,
      dataForm.instructions
    );

    dataFormToApp([newRecipe]);

    setDataForm({
      title: "",
      ingredients: "",
      servings: "",
      instructions: "",
    });
  };

  return (
    <form className={StyleSheet.formStyle} action="#" onSubmit={submitRecipeForm}>
      <label htmlFor="title">Recipe's title : </label>
      <input
        type="text"
        name="title"
        value={dataForm.title}
        onChange={handleInputChange}
      />

      <label htmlFor="ingredients">Ingredients ( separate with a "|") : </label>
      <input
        type="text"
        name="ingredients"
        value={dataForm.ingredients}
        onChange={handleInputChange}
      />

      <label htmlFor="servings">Servings : </label>
      <input
        type="text"
        name="servings"
        value={dataForm.servings}
        onChange={handleInputChange}
      />

      <label htmlFor="instructions">Instructions : </label>
      <input
        type="text"
        name="instructions"
        value={dataForm.instructions}
        onChange={handleInputChange}
      />

      <button>Submit</button>
    </form>
  );
};
export default Formular;
