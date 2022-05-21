import React from 'react';
import {useParams} from 'react-router-dom';
import '../App.css';

export default function ListingDetails(){
   const { name, url } = useParams();

    return (     
        <div>
            <p>Details</p>
            <p>{name}</p>
            <p>{url}</p>
        </div> 
       
    );
}