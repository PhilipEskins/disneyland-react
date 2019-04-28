import React from 'react';
import PropTypes from 'prop-types';

function AttractionDetail(props) {
  console.log(props)
  return(
    <div>
      <h1>{props.attractionName.name}</h1>
      <p>{props.attractionName.height}</p>
      <p>{props.attractionName.type.join(', ')}</p>
      <p>{props.attractionName.location}</p>
      <p>{props.attractionName.teaser}</p>
    </div>
  );
}

AttractionDetail.propTypes = {
  location: PropTypes.object
};

AttractionDetail.propTypes = {
  attractionName: PropTypes.object
}

export default AttractionDetail;
