import React from 'react';
import GPCard from './GPCard';
import PropTypes from 'prop-types';

function GPCardList({gpData}) {

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

GPCardList.propTypes = {
  gpData: PropTypes.array.isRequired,
  accessToken: PropTypes.string.isRequired
}

export default GPCardList;
