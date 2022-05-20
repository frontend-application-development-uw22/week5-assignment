import React, {useState, useEffect} from 'react';
import GPCard from './GPCard';

function GPCardList({gpData, accessToken}) {

  let iKey = -1;
  const gpCardList = gpData.map((gp) => {
    iKey++;
    const gpCardId = "gpcard-" + iKey;
    return <GPCard 
      key={gpCardId}
      cardId={gpCardId}
      gp={gp}
    />
  });

  return (
    <div className="gpcard-list">
      {gpCardList}
    </div>
  );
}

export default GPCardList;
