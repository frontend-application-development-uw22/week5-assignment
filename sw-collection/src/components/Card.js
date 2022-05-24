import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import PropTypes from 'prop-types';
import CheckBox from "./CheckBox";

const Card = ({ item }) => {
  const [itemDetail, setItemDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log(item);
  useEffect(() => {
    fetch(`${item.url}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setItemDetail(data);
        setIsLoading(false);
      });
  }, [item.url]);

  if (isLoading) {
      return <p>Loading...</p>;
  }

  return (
    <div className='card'>
      <CheckBox />
      <Link to={`/itemDetail/${item.name}`}>
        <Image src={itemDetail.sprites.front_default} />
      </Link>
      <div className="text-container">
        <div className="title">
          <Link to={`/itemDetail/${item.name}`}>{item.name}</Link>
        </div>
      </div>
    </div>
  )
}

// Define props types
Card.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Card
