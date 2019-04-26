import React from 'react';
import PropTypes from 'prop-types';

function VacationBar(props) {

  function adjustPeople(number, action, person) {
    if(action === 'add') {
      number++;
    } else if (action === 'sub') {
      if (number === 0) {
        number = 0;
      } else {
        number--;
      }
    }
    if (person === 'child') {
      props.onChildren(number);
    } else {
      props.onAdult(number);
    }
  }

  function peoplePicker(person, action) {
    if (person === 'children') {
      adjustPeople(props.childrenNum, action, 'child');
    } else {
      adjustPeople(props.adultNum, action, 'adult');
    }
  }

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
          <button className="adultSub" onClick={()=>peoplePicker('adult', 'sub')}>-</button>
          <span className="adultNum">{props.adultNum}</span>
          <button className="adultAdd" onClick={()=>peoplePicker('adult', 'add')}>+</button>
        </div>
        <span className="childTitle">Children</span>
        <div className="child">
          <button className="childSub" onClick={()=>peoplePicker('children', 'sub')}>-</button>
          <span className="childNum">{props.childrenNum}</span>
          <button className="childAdd" onClick={()=>peoplePicker('children', 'add')}>+</button>
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

VacationBar.propTypes = {
  onAdult: PropTypes.func,
  onChildren: PropTypes.func,
  adultNum: PropTypes.number,
  childrenNum: PropTypes.number
};

export default VacationBar;
