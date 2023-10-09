/**Pas la peine de faire du jsx, on peut use du js !! */

import { useState, useEffect } from "react";

const Api = ({recipesToApp}) => {

  /**on use useEffect car un appel api est asynchrone, si on le fait direct dans le render, cela peut prendre du tps
   * car synchrone.
   * useEffect fait effet après le render.
   * il y a un rerender quand setRecette est rempli
   */
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
        recipesToApp(data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []); // aucune dépendance pour useEffect

  //return null;  le composant ne fait aucun rendu

};
export default Api;
