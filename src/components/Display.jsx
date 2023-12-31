import ModalOfDetails from "./ModalOfDetails";
import svg from "../assets/img/card-checklist.svg";
import { useState } from "react";
import styleFile from "../css/Style.module.css"

const Display = (props) => {
  const { data, setRecettes } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedRecette, setSelectedRecette] = useState(null);

  const descriptionLogoStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "orange",
    borderRadius: "50%",
    border: "none",
  };

  console.log(data);

  const deleteItemClick = (id) => {
    const updatedRecipes = data.filter((recipe) => recipe.id !== id);
    setRecettes(updatedRecipes);
    console.log(id);
  };

  const openModal = (recette) => {
    setSelectedRecette(recette);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedRecette(null);
    setShowModal(false);
  };

  return (
<div>
      {showModal ? null : (
        <div className={styleFile.mainDisplay}>
          {data.map((recette, index) => (
            <div className={styleFile.oneLineOfRecipe} key={index}>
              <div>
              {recette.title}
              </div>
              <div>
              <button
                style={descriptionLogoStyle}
                onClick={() => openModal(recette)}
              >
                <img src={svg} alt="Details Button" />
              </button>
              </div>
              <div>
              <button onClick={() => deleteItemClick(recette.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showModal && (
        <ModalOfDetails
          showModal={showModal}
          onClose={closeModal}
          recetteDetails={selectedRecette}
        />
      )}
    </div>
  );
};
export default Display;
