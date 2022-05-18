import ItemList from "./ItemList";
import PropTypes from 'prop-types';
const Home = ({ itemList }) => {
  const itemArray = Object.values(itemList);
  // console.log(itemArray);
  return (
    <ItemList itemList={itemArray} />
  )
}

ItemList.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home;