import React from "react";
// import luke from "../images/luke-skywalker.jpg";
import { Link  } from 'react-router-dom';

function Characters({character}) {


    return (
      
            <div className="character-list">
                {/* <img className="character-img" src={luke} alt="Luke holding a light sabre" /> */}
                <p>{character.name}</p>
                <button><Link to="/character/charName">Learn More</Link></button>
            </div>

    )

}

export default Characters