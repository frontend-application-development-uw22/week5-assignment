import React from "react";
import { Link } from 'react-router-dom';

function Info({ animal, idx }) {
    return (
        <div>
            <div key='index'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Mexican_Wolf_2_yfb-edit_1.jpg" alt="Mexican Wolf" />
                <div className="info">
                    <p>name: "Mexican Wolf"</p>
                    <p>latin_name: "Canis lupus baileyei"</p>
                    <p>animal_type: "Mammal"</p>
                    <p>geo_range: "Arizona and New Mexico"</p>
                    <p>diet: "Elk, deer, peccaries, rabbits, rodents, and carrion"</p>
                    <p>lifespan: "11"</p>
                </div>
            </div>
            <button><Link to="/">Home</Link></button>
        </div>

    )
}

export default Info