import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

function VillagerInfo() {

    const {id} = useParams();
    const [villagerInfo, setVillagerInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const villagerId = id;

    useEffect((id) => {
        fetch(`https://acnhapi.com/v1a/villagers/`+ villagerId)

            .then(response => response.json())

            .then(
                data => {
                    setVillagerInfo(data);
                    setIsLoading(false);
                },

                error => {
                    setHasError(true)
                    setIsLoading(false);

                }
            );


    }, [villagerId]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (hasError) {
        return <p>An error has occurred.  Please try again.</p>
    }

    return (
        <div>
            <div key={villagerInfo.id} className="info">
                <img src={villagerInfo[`image_uri`]} alt={villagerInfo[`file-name`]} />
                <div className="info"  >
                    <p><span>Name:  </span> {villagerInfo.name[`name-USen`]}</p>
                    <p><span>personality:  </span>  {villagerInfo.personality}</p>
                    <p><span>Birthday:  </span>  {villagerInfo[`birthday-string`]}</p>
                    <p><span>Catch Phrase:  </span>  {villagerInfo[`catch-phrase`]}</p>

                </div>
            </div>
            <button><Link to="/">Home</Link></button>
        </div>

    )
}

export default VillagerInfo