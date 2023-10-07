const Display = (props) => {
  const { data, setRecettes } = props;

  console.log(data);
 

  const deleteItemClick = (id) => {
    const updatedRecipes = data.filter((recipe) => recipe.id !== id);
    setRecettes(updatedRecipes);
    console.log(id)
  };

  return (
    <div>
      {data.map((recette, index) => (
        <div key={index}>
          {recette.title}
          <button onClick={() => deleteItemClick(recette.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};
export default Display;
