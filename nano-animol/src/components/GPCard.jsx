import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import GPPage from './GPPage';

function GPCard({cardId, gp}) {

  const gpName = gp.name;
  const gpId = gp.id;
  const gpAge = gp.age;
  const gpGender = gp.gender;
  const gpPhotos = gp.photos;
  const gpDescription = gp.description;
  const gpSpecialNeeds = gp.attributes.special_needs;
  const locCity = gp.contact.address.city;
  const locState = gp.contact.address.state;
  const locEmail = gp.contact.email;
  const locDistance = gp.distance;
  const locPhone = gp.contact.phone;
  const locId = gp.organization_id;
  const imgAlt = `Image of ${gpName}.`;

  const specialNeedsClasses =
    gpSpecialNeeds ? "special-needs" : "special-needs hidden"
  
  return (
    <Link 
      to={{
        pathname: `/guinea-pigs/${gpId}`
      }}
      element={<GPPage />}
    >
      <div id={cardId} className="gpcard">
        <img src={gpPhotos[0].medium} alt={imgAlt}/>
        {gpName} {locDistance.toFixed(2)} miles
      </div>
    </Link>
  );

}

// GPCard.propTypes = {
  
// }

export default GPCard;
