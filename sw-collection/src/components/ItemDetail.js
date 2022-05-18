import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";

const ItemDetail = () => {
  const [pkItemDetail, setPkItemDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {itemName} = useParams();
  const navigate = useNavigate();
  // Get the item's detail info
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${itemName}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setPkItemDetail(data);
        setIsLoading(false);
      });
  }, [itemName]);

  if (isLoading) {
      return <p>Loading...</p>;
  }

  const addMyCollection = () => {
    // Define Pokemon character array
    let pkCharacterArray = [];
    // Get data from local storage
    const myCollection = JSON.parse(localStorage.getItem("myCollection"));
    // Put data to pokemon character array if it has data
    if (myCollection) {
      pkCharacterArray = myCollection;
    }
    if (pkCharacterArray.length > 0) {
      const exist = pkCharacterArray.filter(pkChar => (pkChar.name === pkItemDetail.name));
      if (exist.length === 0) {
        // Add this character to pkCharacter array
        const name = pkItemDetail.name;
        const url = `https://pokeapi.co/api/v2/pokemon/${pkItemDetail.id}/`

        pkCharacterArray.push({name, url});
        // Add the array to local storage
        localStorage.setItem("myCollection",JSON.stringify(pkCharacterArray));
        alert('The task has been done. Please visit the Favorite Characters page!')
      } else {
        alert('This character has already been in your favorite characters collection.');
      }
    }
  }

  return (
    <div className="detail-card">
      <Image src={pkItemDetail.sprites.front_default} />
      <div className="text-container">
        <div className="title">{pkItemDetail.name}</div>
        <div className="content">{`National Pokedex No. #${pkItemDetail.id}`}</div>
        <div className="content">Height: {pkItemDetail.height}</div>
        <div className="content">Weight: {pkItemDetail.weight}</div>
        <div className="content">Ability: {pkItemDetail.abilities[0].ability.name}</div>
        <div className="content">Type:
          {pkItemDetail.types[0].type.name} {pkItemDetail.types.length > 1 ? `/ ${pkItemDetail.types[1].type.name}` : ''}
        </div>
        <Button type="submit" text="Back to Home page" onClick={()=> navigate('/')} classBtn='btn' />
        <Button type="submit" text="Add to Favorite Characters" onClick={addMyCollection} classBtn='btn' />
      </div>
    </div>
  )
}

export default ItemDetail
