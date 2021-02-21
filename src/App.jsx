
import './App.css';
import Hola from  './components/Hola';
import Contador from  './components/Contador';
import Lista from './components/Lista';
import Temperatura from './components/Temperatura';
import Formularios from './components/Formularios';

function App() {
  return (
    <div className="App  ">
      <h1>Hola mundo la concha de tu madre</h1>
      <form> 
        <input type="text" />
        <input type="submit"/>
      </form>
      <Hola></Hola>
      <Contador></Contador>
      <Lista></Lista>
      <Temperatura> </Temperatura>
      <Formularios> </Formularios>

    </div>
    
      
  );
}

export default App;

