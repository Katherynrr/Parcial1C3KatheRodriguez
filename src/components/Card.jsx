import React from 'react'

const Card = (props) => {
  return  <div> Hola, Soy una tarjeta ► 
  <h2> hi! {props.estudiante} tu edad es {props.edad} años</h2>
  </div>
  
}
export default Card;