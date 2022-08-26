import React from 'react'
import { useState } from 'react'
import { baseColaboradores } from './baseColaboradores'
import { nanoid } from "nanoid";

const Colaboradores = (Props) => {
  const [nombreColaborador, setNombreColaborador] = useState('')
  const [emailColaborador, setEmailColaborador] = useState('')
  const [listaColaboradores, setListaColaboradores] = useState(baseColaboradores)
 

  const agregarColaborador = (e) => {
    e.preventDefault();
    if (!nombreColaborador.trim() || !emailColaborador.trim() === "") {
      alert("Debes llenar ambos campos")
  } else {
    setListaColaboradores([...listaColaboradores, {id: nanoid(), nombre: nombreColaborador, correo: emailColaborador}
    ])
  }
};
  //función de búsqueda
  const buscar = (e) => {
      Props.setBuscando(e.target.value);
      console.log(e.target.value)
  }



  return (
    <>                                                                                            <div className='container'>                                     
        <form className='formulario' onSubmit={agregarColaborador}>
        
          <label>Nombre del colaborador</label>
          <input 
              type="text"  
              id="nombre" 
              className='form-control' 
              placeholder='Ingresa el nombre del colaborador' 
              onChange={(e) => setNombreColaborador(e.target.value)} 
              value={nombreColaborador} />
     
          <label>Correo del colaborador</label>
            <input 
            type="email" 
            name="correo" 
            className='form-control'
            placeholder='Ingresa correo del colaborador' 
            onChange={(e) => setEmailColaborador(e.target.value)} 
            value={emailColaborador} />
           {/* {error ? <p className="error" class="alerta" > <i>Debes llenar ambos campos</i></p> : null}  */}
          <button type="submit"  className="btn btn-secondary my-2" >Agregar colaborador</button>
        </form>
        
        <hr />

        <div className='lista'>
          <h1 className='titulo-lista'>Lista de Colaboradores</h1>
            {/* {listaColaboradores.filter} */}
          <ul>
            {listaColaboradores.map(id => <p key={id} > {id.nombre} - {id.correo} </p>)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Colaboradores

/*{baseColaboradores.map( p => <li key={id}></li>)}*/