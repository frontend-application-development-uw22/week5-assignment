import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAccessToken, getGPListData } from '../get-data';

function SearchBar({setGPData, setLoading}) {

  const [validZip, setValidZip] = useState(true);
  const goTo = useNavigate();

  const searchBarMessageClasses = 
    validZip ? "searchbar-message hidden" : "searchbar-message";

  const getGPDataFromZip = async () => {
    const zip = parseInt(document.getElementById("search").value);
    // Validate searchbar contents is a functional zip.
    const validLength = document.getElementById("search").value.length === 5;
    const validType = !(isNaN(zip));
    if (validLength && validType) {
      setValidZip(true);
      await setLoading(true);
      const gotAccessToken = await getAccessToken();
      const gotGPData = await getGPListData(gotAccessToken, zip);
      setGPData(gotGPData);
      setLoading(false);
      goTo("/");
    } else {
      setValidZip(false);
    }
  }

  const emptySearchBar = () => {
    document.getElementById("search").value = "";
  }

  return (
    <div className="searchbar-mechanism">
      <div className="searchbar-container">
        <input
          id="search" 
          className="searchbar"
          onFocus={emptySearchBar}
          defaultValue="Enter a ZIP code to find a nano animol!"
        />
        <button onClick={getGPDataFromZip}>
          Search
        </button>
      </div>
      <p className={searchBarMessageClasses}>
        ⚠ Please provide a valid <a href="https://en.wikipedia.org/wiki/ZIP_Code">
          ZIP code
        </a>.
      </p>
    </div>
  );

}

SearchBar.propTypes = {
  setGPData: PropTypes.func.isRequired
}

export default SearchBar;