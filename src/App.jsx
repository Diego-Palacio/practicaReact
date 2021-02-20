
import './App.css';
import Hola from  './components/Hola';
import Contador from  './components/Contador';

function App() {
  return (
    <div className="App">
      <h1>Hola mundo la concha de tu madre</h1>
      <form> 
        <input type="text" />
        <input type="submit"/>
      </form>
      <Hola></Hola>
      <Contador></Contador>
    </div>
    
      
  );
}

export default App;

