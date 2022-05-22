import React from 'react';

function Animals({animal, idx}) {
    return(
        <div key='index'>
            <h3>{animal.name}</h3>
        </div>

    )
}

export default Animals