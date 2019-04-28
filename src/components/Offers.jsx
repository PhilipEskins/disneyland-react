import React from 'react';
import storyteller from '../assets/img/offer-storyteller.jpg';
import pixar from '../assets/img/pixar-pier-night.jpg';
import grand from '../assets/img/offer-grand-cal-night.jpg';

function Offers() {
  return (
    <div>
    <style jsx> {`
        .wrapper {
          margin: auto;
          width: 90vw;
        }
        .grid {
          display: grid;
          grid: 1fr 1fr / 1fr 1fr 1fr;
        }
        .storyteller {
          grid-column: 1/3;
          width: 100%;
        }
        .pixar {
          grid-column: 3;
          width: 100%;
        }
        .save {
          grid-row: 2;
        }
        .grand {
          grid-row: 2;
          grid-column: 2;
          width: 100%;
        }
        .parks {
          background-color: #a93226;
          color: white;
        }
      `}</style>
      <div className="wrapper">
        <h1>Offers and Benefits</h1>
        <div className="grid">
          <img className="storyteller" src={storyteller} />
          <img className="pixar" src={pixar} />
          <div className="save">
            <p>Save Up to 25% on Select Stays</p>
            <p>Take advantage of a magical offer at a Disneyland Resort Hotel!</p>
            <button>Get Details</button>
            <button>View all Offers</button>
          </div>
          <img className="grand" src={grand} />
          <div className="parks">
            <p>Visit the Parks for As Low As $70 Per Day</p>
            <p>Purchase a 3-Day, 1-Park Per Day Ticket with this Limited-Time Special Ticket Offer. Valid January 7 to May 23, 2019. Blackout dates apply.</p>
            <p>Learn More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers;
