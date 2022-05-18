import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
const FavoriteCharacter = () => {
  const [myCollection, setMyCollection] = useState([])
  useEffect(() => {
    // Get data from local storage
    setMyCollection(JSON.parse(localStorage.getItem("myCollection")));
  }, []);

  // Delete all selected items from Favorite Characters page
  const DeleteItems = () => {
    // Get all checkbox elements
    const checkboxList = document.getElementsByName('checkbox');
    // Filter selected items from item list
    const selectedChars = myCollection.filter((item, idx) => checkboxList[idx].checked);
    if (selectedChars.length === 0) {
      alert('Please select any characters that you want to delete!');
      return;
    }
    // Request a confirmation from users
    const confirmation = window.confirm(
      'Are you sure you want to delete these items?'
    );

    if (confirmation) {
      // Create a new array to store unchecked-chars
      const newArray = myCollection.filter((item, index) => !checkboxList[index].checked);
      // Set myCollection = new array
      setMyCollection(newArray);

      // Store new characters array to local storage
      localStorage.setItem("myCollection",JSON.stringify(newArray));
      // Reset all checkboxes
      for (let checkbox of checkboxList) {checkbox.checked=false;}
    }
  }

  return (
    <div className={`${myCollection.length > 0 ? 'show' : 'hide'}`}>
      <div className='header-comment'>
        <Button text='Delete selected characters' onClick={DeleteItems} classBtn='btn danger' />
        <div className="content">Check the checkbox on each character card and then click the button on the left to delete the selected items...</div>
      </div>
      <div className='container'>
        {myCollection.map((item, idx) => <Card key={idx} item={item} />)}
      </div>
    </div>

  )
}

export default FavoriteCharacter
