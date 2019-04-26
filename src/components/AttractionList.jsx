import React from 'react';
import Attractions from './Attractions';
import PropTypes from 'prop-types';

function AttractionList(props) {
  return (
    <div>
      <hr/>
      {Object.keys(props.masterAttractionList).map(function (attractionId) {
        const attraction = props.masterAttractionList[attractionId];
        return <Attractions name = {attraction.name}
          url = {attraction.url}
          teaser = {attraction.teaser}
          location = {attraction.location}
          height = {attraction.height}
          type = {attraction.type}
          key = {attractionId}
        />;
      })}
    </div>
  );
}

AttractionList.propTypes = {
  masterAttractionList: PropTypes.object,
  attractionId: PropTypes.string
};

export default AttractionList;

// return (
//   <div>
//     {Object.keys(props.masterAttractionList).map(function (attractionId) {
//       const attraction = props.masterAttractionList[attractionId];
//       return <Attractions name={attraction.name}
//         height={attraction.height}
//         type={attraction.type}
//         location={attraction.location} />;
//     })}
//     <p>Working on new things</p>
//     <hr />
//   </div>
// );
