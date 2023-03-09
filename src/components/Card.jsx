import React from 'react'
import  './styles/Card.css'

const Card = ({nombre,baile, edad}) => {
  return(

<div className='card'>
  <div> 
    <div>
      <h2>Hola tus datos son:</h2> 
      <h3>{nombre} tu clase de baile es: {baile} tu edad es: {edad}  años , tu clase es en el salon No. 525</h3>
    </div>
  </div>
</div>
 )
  
}
export default Card;