// import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ListItem({pokemon}){   
    console.log(pokemon)
    return <Link to={`/${pokemon}`}>
        <div className='list-container'>
               <p className='pokemon-name'>{pokemon}<span className='arrow'>&#62;</span></p>
             </div>
    </Link>
}

ListItem.propTypes = {
    pokemon: PropTypes.string,
 };


export default ListItem