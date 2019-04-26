import React from 'react';
import PropTypes from 'prop-types';

function AttractionDetail({match}) {
  return(
    <div>
      <h1>Attraction Detail works</h1>
      <p>You clicked on {match.params.id}</p>
    </div>
  );
}

AttractionDetail.propTypes = {
  location: PropTypes.object
};

export default AttractionDetail;
