// src/components/ItemList.jsx
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No items found.</p>; // Handle empty state
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          {item.name}: {item.description}
        </li>
      ))}
    </ul>
  );
};

// PropTypes for validation
ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ItemList;
