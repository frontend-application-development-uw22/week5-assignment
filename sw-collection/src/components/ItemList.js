import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
import Card from './Card';
import Button from './Button';
const ItemList = ({ itemList }) => {
  // Define some vars for pagination function
  const [pageNumber, setPageNumber] = useState(0);
  // Set the number of items for each page
  const itemsPerPage = 10;
  const pagesVisited = pageNumber * itemsPerPage;
  // This function is used to display the set of items on the home page 
  const displayItems = itemList
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item, idx) => {
      return (
        <Card key={idx} item={item} />
      );
    });

  const pageCount = Math.ceil(itemList.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Get all the selected characters and save to the local storage 
  const getFavoriteCharacter = () => {
    // Define Pokemon character array
    let pkCharacterArray = [];
    // Get data from local storage
    const myCollection = JSON.parse(localStorage.getItem("myCollection"));
    // Put data to pokemon character array if it has data
    if (myCollection) {
      pkCharacterArray = myCollection;
    }

    // Get all checkbox elements
    const checkboxList = document.getElementsByName('checkbox');
    // Filter selected items from item list
    const selectedChars = itemList
      .slice(pagesVisited, pagesVisited + itemsPerPage)
      .filter((item, idx) => checkboxList[idx].checked);
    if (selectedChars.length === 0) {
      alert('Please select your favorite characters!');
      return;
    }
    if (pkCharacterArray.length > 0) {
      selectedChars.forEach(item => {
        const exist = pkCharacterArray.filter(pkChar => (pkChar.name === item.name));
        if (exist.length === 0) {
          pkCharacterArray.push(item);
        }
      });
    } else {
      pkCharacterArray = selectedChars;
    }
    // Save data to the local storage
    localStorage.setItem("myCollection",JSON.stringify(pkCharacterArray));
    // Show this message when the task has been done
    alert('The task has been done. Please visit the Favorite Characters page!');
    // Reset all checkboxes in character cards
    for (let checkbox of checkboxList) {checkbox.checked = false;}
  };

  return (
    <>
      {/* Rendering the button & the instruction below on the top of the page */}
      <div className="header-comment">
        <Button text='Get your favorite characters' onClick={getFavoriteCharacter} classBtn='btn' />
        <div className="content">Check the checkbox on each character card and then click the button on the left to get your favorite characters...</div>
      </div>
      {/* Rendering the item list */}
      <div className='container'>
        {displayItems}
      </div>
      {/* Rendering the pagination buttons */}
      <div className='row'>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ItemList
