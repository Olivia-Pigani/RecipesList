import { useState } from "react";
import Api from "./api/Api";
import Display from "./components/Display";

function App() {

const [recettes, setRecettes] = useState([]);

const handleRecipesToApp = (data) => {
  setRecettes(data)
  console.log(recettes) // à l'instant t donc array vide
  console.log(data) // après que l'asynchrone soit executée donc rempli
}




  return <div className="App">

<Api recipesToApp={handleRecipesToApp}/>
<Display data={recettes} />


  </div>;
}

export default App;
