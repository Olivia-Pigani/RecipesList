import { useState } from "react"

export default function ModalOfDetails ({ showModal, onClose, recetteDetails }) {



    return(
        <div style={{ display: showModal ? "block" : "none" }}>
        <div>
          <p>{recetteDetails.title}</p>
          <p>{recetteDetails.servings}</p>
          <p>{recetteDetails.ingredients}</p>
          <p>{recetteDetails.instructions}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    
    )
}