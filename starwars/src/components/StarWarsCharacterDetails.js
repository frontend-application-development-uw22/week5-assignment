import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function StarWarsCharacterDetails() {
 
    const [character, setCharacter] = useState([]);
    const [films, setFilms] = useState([]);
     const { id } = useParams();

    const fetchFilms = (result) => {
        result.forEach(e => {
            fetch(e)
            .then(response => response.json())
            .then(character => {                 
                setFilms(prev => [...prev, character]);
            })
            .catch(() => {
                
            });
        });
    }

    useEffect(() => {
     
        fetch(`https://swapi.dev/api/people/${id}/`)
            .then(response => response.json())
            .then(character => {
                setCharacter(character);
                fetchFilms(character.films);  
            })
            .catch(() => {
                
            });              
    }, [id]);

    const sortByField = (field) => {  
        return function(a,b){  
           if(a[field] > b[field])  
              return 1;  
           else if(a[field] < b[field])  
              return -1;  
       
           return 0;  
        }  
     }

    const movies = films
                        .sort(sortByField("episode_id"))
                        .map((item, index) => {
                            return(
                                <div key={index}>
                                    <div >
                                        <b>Title: </b>{item.title} , <b>Episode: </b> {item.episode_id}
                                        <br/ >
                                        <b>Director: </b>{item.director}
                                        <br/ >
                                        <b>Producer: </b>{item.producer}
                                        <br/ >
                                        <b>Release Date: </b>{item.release_date}
                                        <br/ >  <br/ >
                                        {item.opening_crawl}
                                    </div>
                                        <br></br>
                                </div>
                            );
                        });
    
    return (
    <div>        
    
        <div>
        <h4>{character.name}</h4>
        <b>Mass:</b> {character.mass}
        <br></br>
        <br></br>
            <b>Movies: </b>
            <br></br> <br></br>
                   {movies} 
        </div>
       
    </div>
    )
}
