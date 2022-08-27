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
    if (!nombreColaborador.trim() || !emailColaborador.trim()) {
      alert("Debes llenar ambos campos")
  } else {
    setListaColaboradores([...listaColaboradores, {id: nanoid(), nombre: nombreColaborador, correo: emailColaborador}
    ])
  }
};
  

  return (
    <>                                                                 
    <div className='container'>                                     
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
          <ul>
            {listaColaboradores.filter((lista)=>{
                if (Props.buscando === "") {
                  return lista;
                } else if (lista.nombre.toLocaleLowerCase().includes(Props.buscando.toLocaleLowerCase()) || 
                lista.correo.toLocaleLowerCase().includes(Props.buscando.toLocaleLowerCase()) ) {
                  return lista
                }
            
              }).map(li => <p key={li} > {li.nombre} - {li.correo} - {li.id} </p>)
            }
            
          </ul>

            {/* <button id="eliminarcolaborador" type="button" class="btn-eliminar" onclick="eliminarTarea(${elemento.id})">Eliminar</button> */}
        </div>
      </div>
    </>
  )
}

export default Colaboradores

/*{baseColaboradores.map( p => <li key={id}></li>)}*/