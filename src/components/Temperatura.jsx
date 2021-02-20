import React, {Fragment,useState}from 'react';


function Temperatura(){

const [numeros,setNumeros]= useState(0);

const sumar=()=>{
    setNumeros(numeros+1);
} 

const restar=()=>{
    setNumeros(numeros-1);
} 

const frioCalor=()=>{

    if (numeros<20){
        return "hace frio";
    }

    else {
        return "hace calor"
    }
}

return (

    <Fragment >

    <h1> La temperatura es de : {numeros}</h1>
    <p> 
            {frioCalor()}
    </p>
    <button className="btn btn-success  btn-Block " onClick={restar}> Restar </button>
    <button className="btn btn-success btn-Block "  onClick={sumar}> Sumar </button>


    </Fragment>


);



}


export default Temperatura;