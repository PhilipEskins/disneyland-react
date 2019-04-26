import React from 'react';
import Attractions from './Attractions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AttractionList(props) {
  return (
    <div>
      <hr/>
      {Object.keys(props.masterAttractionList).map(function (attractionId) {
        const attraction = props.masterAttractionList[attractionId];
        return <Link to={"attractions/" + attraction.url} onClick={()=>props.onChangingSelectedAttraction(attractionId)}><Attractions name = {attraction.name}
          location = {attraction.location}
          height = {attraction.height}
          type = {attraction.type}
          key = {attractionId}
        /></Link>;
      })}
    </div>
  );
}

AttractionList.propTypes = {
  masterAttractionList: PropTypes.object,
  attractionId: PropTypes.string,
  selectedAttraction: PropTypes.string,
  onChangingSelectedAttraction: PropTypes.func
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
