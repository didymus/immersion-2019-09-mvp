import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => (
  <div>
    {Object.keys(item).map(obj => <div>{item[obj]}</div>)}
  </div>
);

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
