
import React, {useState}from 'react';


function Formularios (){

const [nombre,setNombre]=useState("");
const [edad,setEdad]=useState("");

const verificar=(event)=>{

    event.preventDefault();
         
    if (!nombre.trim()){ 
            console.log("Documento vacio");
            return;
        }
           else {
            console.log("Documento ingresado");  
            return;
        }
        
     }

return (
<div className="container mt-3">
    <form onSubmit={verificar}>
        
        <input
         placeholder="Ingrese su nombre" 
         type="text"  
         className="form-control mb-3" 
        onChange= { (e) => { setNombre(e.target.value);}   } />
        
        <input placeholder="Ingrese su edad"  
        type="number"
         className="form-control mb-3 "
         onChange= { (e) => { setEdad(e.target.value); }   }  />

        <input type="submit"  className="btn btn-info btn-block mb-3" />

        <p>
            {nombre} {edad} 
        </p>

    </form>
</div>


);

}


export default Formularios;