import { useState, useEffect } from "react";

const Api = () => {
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    const apiUrl = "https://api.api-ninjas.com/v1/recipe?query=";
    let query = "italian";
    const options = {
      headers: { "X-Api-Key": "okVS/7V2XKbiLsWFHV46bQ==mCsO5R6su4cxcZhn" },
    };

    fetch(apiUrl + query, options) // fetch génère une promesse
      .then((response) => {
        if (!response.ok) {
          throw new Error(`erreur de type ${response.status}`);
        } else {
          return response.json();
        }
      })

      .then((data) => {
        console.log(data);
        setRecettes(data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  //return null;  le composant ne fait aucun rendu

  return (
    <div>
      {recettes.map((recette, index) => {
        return <p key={index}>{recette.title}</p>;
      })}
    </div>
  );
};
export default Api;
