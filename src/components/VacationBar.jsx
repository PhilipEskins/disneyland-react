import React from 'react';

function VacationBar() {
  return(
    <div>
      <style jsx>{`
        .wrapper {
          grid-row: 1;
          grid-column 1;
          display: grid;
          grid: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          justify-content: space-around;
          max-width: 1000px;
          margin: auto;
          margin-top; 15px;
          background-color: white;
          width: 80vw;
        }
        .title {
          grid-row: 1/3;
        }
        .dateTitle {
          grid-row: 1;
          grid-column: 2;
        }
        .dateInput {
          grid-row: 2;
          grid-column: 2;
        }
        .adultTitle {
          grid-row: 1;
          grid-column: 3;
        }
        .adult {
          grid-row: 2;
          grid-column: 3;
        }
        .childTitle {
          grid-row: 1;
          grid-column: 4;
        }
        .child {
          grid-row: 2;
          grid-column: 4;
        }
        .hotelTitle {
          grid-row: 1;
          grid-column: 5;
        }
        .hotelSelect {
          grid-row: 2;
          grid-column: 5;
        }
      `}</style>
      <div className="wrapper">
        <span className="title">Price Your Vacation</span>
        <span className="dateTitle">Dates</span>
        <input type="date" className="dateInput" />
        <span className="adultTitle">Adults(18+)</span>
        <div className="adult">
          <button className="adultSub">-</button>
          <span className="adultNum">2</span>
          <button className="adultAdd">+</button>
        </div>
        <span className="childTitle">Children</span>
        <div className="child">
          <button className="childSub">-</button>
          <span className="childNum">0</span>
          <button className="childAdd">+</button>
        </div>
        <span className="hotelTitle">Hotel</span>
        <select className="hotelSelect">
          <option>All Hotels</option>
        </select>
        <span className="accessible">Accessible Rooms</span>
        <button  className="button">Find Hotels</button>
      </div>
    </div>
  );
}

export default VacationBar;