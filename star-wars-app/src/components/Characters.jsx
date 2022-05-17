import React from "react";
import luke from "../images/luke-skywalker.jpg";


function Characters({character}) {


    return (
      
            <div className="character-list">
                <img className="character-img" src={luke} alt="Luke holding a light sabre" />
                <p>{character.name}</p>
                <button>Learn More</button>
            </div>

    )

}

export default Characters