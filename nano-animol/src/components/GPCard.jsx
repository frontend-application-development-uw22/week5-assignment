import React, {useState, useEffect} from 'react';

function GPCard({id, name, age, gender, distance, species, photos, 
  description, specialNeeds, city, state, email, phone, orgId}) {
  
  
  return (
    <div id={id} className="gpcard">
      {name} {distance} miles
    </div>
  );

}

export default GPCard;
