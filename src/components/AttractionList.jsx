import React from 'react';
import Attractions from './Attractions';
import PropTypes from 'prop-types';

// const masterAttractionList = [
//   {
//     id: 'alice-in-wonderland',
//     name: 'Alice in Wonderland',
//     height: 'Any Height',
//     type: ['Slow Rides', 'Dark', 'Loud'],
//     location: 'Disneyland Park, Fantasyland',
//     teaser: 'Take a topsy-turvy trip into the nonsensical world of Disney’s Alice in Wonderland aboard an oversized caterpillar.'
//   },
//   {
//     id: 'animation-academy',
//     name: 'Animation Academy',
//     height: 'Any Height',
//     type: ['Character Experience', 'Discovery', 'Indoor', 'Interactive'],
//     location: 'Disney California Adventure Park, Hollywood Land',
//     teaser: 'Draw your very own character sketch under the guidance of a talented animator.'
//   },
//   {
//     id: 'autopia',
//     name: 'Autopia',
//     height: '32in (81cm) or taller',
//     type: ['Slow Rides', 'Loud', '1955 Original Ride', 'Interactive', 'Rider Switch'],
//     location: 'Disneyland Park, Tomorrowland',
//     teaser: 'Put the pedal to the metal on an unforgettable road trip along a miniature motorway.'
//   }
// ];

function AttractionList(props) {
  return (
    <div>
      <hr/>
      {Object.keys(props.masterAttractionList).map(function (attractionId) {
        const attraction = props.masterAttractionList[attractionId];
        return <Attractions name = {attraction.name}
          location = {attraction.location}
          height = {attraction.height}
          type = {attraction.type}
        />;
      })}
    </div>
  );
}
// {props.masterAttractionList.map((attraction, index) =>
// )}

AttractionList.propTypes = {
  masterAttractionList: PropTypes.object,
  attractionId: PropTypes.string
};

export default AttractionList;

// return (
//   <div>
//     {Object.keys(props.masterAttractionList).forEach(function (attractionId) {
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
