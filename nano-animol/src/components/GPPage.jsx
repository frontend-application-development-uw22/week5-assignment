import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
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
    }
    refreshData();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  const specialNeedsClasses = 
    gpData.attributes.special_needs ? "specialneeds" : "specialneeds hidden";
  
  return (
    <div className="gppage">
      <div className="gppage-img">
        <img src={gpPhotos[0].large}/>
      </div>
      <div className="gppage-details">
        <h1>{gpData.name}</h1>
        <p><i>{gpData.age} {gpData.gender.toLowerCase()} {gpData.species.toLowerCase()}</i></p>
        <p>❝ {gpData.description} ❞</p>
        <p className={specialNeedsClasses}><span className="specialneeds-glyph">⛨</span> Special Needs</p>
        <p><b>Contact |</b> {gpData.contact.email} {gpData.contact.phone}</p>
        <p><b>Location |</b> {gpData.contact.address.city}, {gpData.contact.address.state} {gpData.contact.address.postcode}</p>
        <a href={gpData.url}><button href={gpData.url}>Adopt</button></a>
      </div>
    </div>
  );

}

export default GPPage;
