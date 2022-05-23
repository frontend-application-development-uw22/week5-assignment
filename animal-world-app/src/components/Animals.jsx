import React from 'react';
import {Link} from 'react-router-dom';

function Animals({animal,id, name,  idx}) {
console.log(animal);


    return(
        <div key={id}>
            <h2>Name: {name}</h2>
            <h3>ID: {animal.id}</h3>
            <button ><Link to="sea-creature/:id">Species Info</Link></button>
        </div>

    )
}

export default Animals