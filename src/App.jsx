import './App.css'
import Card from './components/Card';

function App() {
  return (
    <div className="App">

      <h1>Carga de estudiantes</h1>
            
      <form></form>
      <Card estudiante="Juanito" edad={25}/>
      <Card estudiante="Alejo" edad={30}/>  
    
    </div>
  )
}

export default App;
