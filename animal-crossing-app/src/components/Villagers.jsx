import React from 'react';
import {Link} from 'react-router-dom';

function Animals({animal, idx}) {
    return(
        <div key='index'>
            <h3>{animal.name}</h3>
            <button><Link to="animal/:animalName">Species Info</Link></button>
        </div>

    )
}

export default Animals