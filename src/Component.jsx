import React, { useState } from 'react'

export default function Component() {
    
  
  const [text, setText] = useState() // creamos una propiedad llamada: text
  const [updated, setUpdated] = useState() // creamos una propiedad para el boton: updated

  // a traves de la extension snippets ejecutamos la sentencia enf, para crear una funcion de flecha, retirar la sentencia export
  const textOnChange = (event) => { // obtiene la operacion de cambio de estado a traves del OnChange del evento
    setText(event.target.value) // obtener a traves del evento dependiendo del valor del target en el value
  } // retiramos el export y creamos 

  const buttonOnclick = () => {
    setUpdated(text) // pasar la propiedad text
  }

  return (
    <div>
        <p>Aprendemos a crear react y GIT</p>
        <input type="text" value={text} onChange={textOnChange} /> 
        <button onClick={buttonOnclick}>Actualizar</button>
        <p>Texto input: {text}</p> 
        <div>Texto actualizado: {updated}</div>
        <div>Bienvenido a los cambios</div>
    </div>
  )
}
