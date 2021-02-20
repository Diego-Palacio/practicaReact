import React, {Fragment}from 'react';
//importo Fragments para no utilizar div y que hallan muchos de ellos.

function hola(){


    let saludo="Hola";
    
    return (

    <Fragment >
      <h1>{saludo} este es el primer componente</h1>
     
    </Fragment>

    );
}

export default hola;