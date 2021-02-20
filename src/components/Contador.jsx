import React from 'react';

function contador(){
 let random= Math.random()*10;
    let numeroRandom=Math.round(random);

return (
   
    <div>
        <h1>Numeros random xD</h1>
        <p> {numeroRandom}</p>
        
    </div>

);

}

export default contador;