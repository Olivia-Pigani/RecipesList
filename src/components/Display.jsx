import ModalOfDetails from "./ModalOfDetails";
import svg from "../assets/img/card-checklist.svg"

const Display = (props) => {
  const { data, setRecettes } = props;


    const descriptionLogoStyle = {
        width:"40px",
        height:"40px",
        backgroundColor:"orange",
        borderRadius:"50%",
        border:"none"


    }

  console.log(data);
 

  const deleteItemClick = (id) => {
    const updatedRecipes = data.filter((recipe) => recipe.id !== id);
    setRecettes(updatedRecipes);
    console.log(id)
  };

 

  return (
    <>
    <div>
      {data.map((recette, index) => (
        <div key={index}>
          {recette.title}
            <button style={descriptionLogoStyle} ><img src={svg} alt="details Button" /></button>
     
          <button onClick={() => deleteItemClick(recette.id)}>delete</button>
        </div>
      ))}
    </div>
    <>
    <ModalOfDetails showModal={handleShowModal}/>
    </>
    </>
  );
};
export default Display;
