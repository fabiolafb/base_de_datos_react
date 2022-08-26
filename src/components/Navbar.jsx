import React from "react";

const Navbar = (Props) => {
  return (
    <nav className="barra">
      <h3 className="titulo">Buscador de Colaboradores</h3>
      <input
        type="text"
        className="buscador"
        placeholder="Busca un colaborador"
        onChange={(e) => {
          Props.setBuscando(e.target.value)}
        }
         
      />
    </nav> 
  );
};

export default Navbar;
