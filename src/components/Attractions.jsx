import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Attractions(props) {
  return(
    <div>
      <Link to={"attractions/" + props.url}>
        <h3>{props.name}</h3>
        <p>{props.height}</p>
        <p>{props.type.join(', ')}</p>
        <p>{props.location}</p>
      </Link>
      <hr />
    </div>
  );
}

Attractions.propTypes = {
  url: PropTypes.string,
  teaser: PropTypes.string,
  name: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.array,
  location: PropTypes.string,
};

export default Attractions;
