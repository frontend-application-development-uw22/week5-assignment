import React from 'react';
import {useParams, Link} from 'react-router-dom';
import '../App.css';
import header from '../graphics/pokeme.png';

const ListingDetails = () => {
  const {id} = useParams();
  const {name} = useParams();
  const {type} = useParams();

    return (     
        <div className="details-div">
            <div >
                <img className="header-image" src={header} alt="headerimg" />
            </div>
            <div>
                <Link to="/listingAll">Back To Listing All</Link>
            </div>
            <div>
                <p>Pokemon Details</p>
                <ul>                    
                    <li>Id: {id}</li>
                    <li>Name: {name}</li>
                    <li>Type: {type}</li>
                </ul>               
                </div>
        </div> 
       
    );
}
export default ListingDetails;