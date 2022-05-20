import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {getAccessToken, getGPData} from '../get-data.js';
import Loading from './Loading.jsx';

function GPPage() {

  const {gpId} = useParams();
  const [gpData, setGPData] = useState({});
  const [gpPhotos, setGPPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refreshData = async () => {
      const gotAccessToken = await getAccessToken();
      const gotGPData = await getGPData(gotAccessToken, gpId);
      setGPData(gotGPData.animal);
      setGPPhotos(gotGPData.animal.photos);
      setLoading(false);
      console.log(gpData);
    }
    refreshData();
  }, [gpData]);

  if (loading) {
    return (
      <Loading />
    )
  }

  const specialNeedsClasses = 
    gpData.attributes.special_needs ? "special-needs" : "special-needs hidden";
  
  return (
    <div className="gppage">
      <h1>{gpData.name}</h1>
      <img src={gpPhotos[0].large}/>
      <p>{gpData.species}</p>
      {gpData.age} ⚥{gpData.gender}

      <p className={specialNeedsClasses}>⛨ Special Needs</p>

      {gpData.contact.email} {gpData.contact.phone}

      {gpData.contact.address.city} {gpData.contact.address.state} {gpData.contact.address.postcode}
      <button href={gpData.url}>Adopt</button>
    </div>
  );

}

export default GPPage;
