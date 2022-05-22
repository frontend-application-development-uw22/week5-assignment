import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';


export default function StarWarsCharactersList() {

    const [data, setData] = useState([]);

    const history = useHistory();

    useEffect(() => {
  
        fetch(`https://swapi.dev/api/people`)
            .then(response => response.json())
            .then(data => {
                
                setData(data.results.map((item, index) => {
                    return {...item, id: index};
                }));
  
            })
            .catch(() => {
                
            });
    }, []);

  
    const onCharacterSelectHandler = (id) => {
        history.push(`/details/${id}`);
    }

    const styleObj = {
        fontSize: 22,
        color: "#4a54f1"

    }
 
      const items = data.map((todo,idx) => 
      <div class="flex-container" flex-direction="row"> 
         
          <div><li style={styleObj} key = {idx}>  {todo.name} </li>  
           <button class="button" type="button" onClick={() => onCharacterSelectHandler(idx+ 1)}>Click for Movie details</button></div>
 
      </div>)

      return(
          <div>
             <ul>
              {items}
             </ul>
          </div>
          );
  }
