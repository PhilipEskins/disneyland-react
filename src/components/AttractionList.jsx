import React from 'react';
import Attractions from './Attractions';

const masterAttractionList = [
  {
    id: 'alice-in-wonderland',
    name: 'Alice in Wonderland',
    height: 'Any Height',
    type: ['Slow Rides', 'Dark', 'Loud'],
    location: 'Disneyland Park, Fantasyland',
    teaser: 'Take a topsy-turvy trip into the nonsensical world of Disney’s Alice in Wonderland aboard an oversized caterpillar.'
  }
];

function AttractionList() {
  return(
    <div>
      <hr />
      {masterAttractionList.map((attraction, index) =>
        <Attractions name={attraction.name}
          id={attraction.id}
          height={attraction.height}
          type={attraction.type}
          location={attraction.location}
          key={index} />
      )}
    </div>
  );
}

export default AttractionList;