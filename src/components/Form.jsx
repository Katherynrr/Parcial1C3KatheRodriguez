import React, { useState } from 'react'
import Card from './Card'



const Form = () => {

    const [show, setShow] =useState(false)
    const [error, setError] =useState(false)    

    const handleSubmit = (event) =>{
        event.preventDefault()        
        if(user.baile.length > 2 && user.baile !=="" && user.nombre.length > 6 && user.edad >= 5){
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }       
        
    const [user, setUser] = useState({
        baile:"",
        nombre:"",        
        edad: "",
        email:"",
    })
   

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Baile</label>
            <input type="baile" value={user.baile} onChange={(e) => setUser({...user, baile: e.target.value})}/>
            <label>Nombre Completo</label>
            <input type="nombre" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Edad</label>
            <input type="number" min="5" max="100" value={user.edad} onChange={(e) => setUser({...user, edad: e.target.value})}/>
            <br />
            <label>Email</label>
            <input type="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
            <label>Password</label>
            <input type="password"/>
            <br />
            <button>Enviar</button>
            
        </form> 
        
            <h4>{error && "Por favor chequea que la información sea correcta" }</h4>
            {show && <Card baile={user.baile} nombre={user.nombre} edad={user.edad}/> } 
            
    </div>
  )
}

export default Form