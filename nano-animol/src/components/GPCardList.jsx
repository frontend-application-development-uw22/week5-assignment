import React, {useState, useEffect} from 'react';
import GPCard from './GPCard';

function GPCardList({gpData}) {

  let iKey = -1;
  const gpCardList = gpData.map((gp) => {
    iKey++;
    console.log(gp);
    const gpCardId = "gpcard-" + iKey;
    return <GPCard 
      key={gpCardId}
      name={gp.name}
      age={gp.age}
      gender={gp.gender}
      distance={gp.distance}
      species={gp.species}
      photos={gp.photos}
      description={gp.description}
      specialNeeds={gp.attributes.special_needs}
      city={gp.contact.address.city}
      state={gp.contact.address.state}
      email={gp.contact.email}
      phone={gp.contact.phone}
      orgId={gp.organization_id}
    />
  });

  return (
    <div className="gpcard-list">
      {gpCardList}
    </div>
  );
}

export default GPCardList;
