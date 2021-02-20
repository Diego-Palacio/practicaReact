
import React, {Fragment,useState}from 'react';


const Lista =() =>{
    const [numeros]= useState([1,2,3,4,5,6]);

return (

 <Fragment>

    <ul>
        {
            numeros.map( (item) =>
            <li key={item}>
                {item} 
            </li>
            )

        }

    </ul>

 </Fragment>
);

}


export default Lista;