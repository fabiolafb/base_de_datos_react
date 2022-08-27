import Navbar from "./components/Navbar";
import Colaboradores from "./components/Colaboradores";
import { useState } from "react";

function App() {
  const [buscando, setBuscando] = useState('')
  
  return (
    <div className="App">
      <Navbar setBuscando={setBuscando} />
      <Colaboradores buscando={buscando} />

    </div>
  );
}

export default App;
