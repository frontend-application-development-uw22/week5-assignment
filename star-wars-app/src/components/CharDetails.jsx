import React from 'react';
import luke from "../images/luke-skywalker.jpg"



function CharDetails() {
    return (
        <div>
            <img className ="character-img" src={luke} alt="Luke Skywalker" />
            <h2>Luke Skywalker</h2>

            <p><span>Hair Color:  </span>blond</p>
            <p><span>Eye Color:  </span>blue</p>
            <p><span>Height:  </span>177 cm</p>


        </div>

    )

}

export default CharDetails