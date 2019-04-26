import React from 'react';
import VacationBar from './VacationBar';
import VideoDisplay from './VideoDisplay';
import Offers from './Offers';
import PropTypes from 'prop-types';

function MainPage(props) {
  return (
    <div className="container">
      <style jsx> {`
        .container {
          display: grid;
          grid: 1fr / 1fr;
        }
        .vacationBar {
          grid-row: 1;
          grid-column: 1;
        }
        .videoDisplay {
          grid-row: 1;
          grid-column: 1;
        }
      `}</style>
      <div className="vacationBar">
        <VacationBar onAdult = {props.onAdult} onChildren = {props.onChildren} adultNum={props.adultNum} childrenNum={props.childrenNum}/>
      </div>
      <div className="videoDisplay">
        <VideoDisplay />
      </div>
      <div className="offers">
        <Offers />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  onAdult: PropTypes.func,
  onChildren: PropTypes.func,
  adultNum: PropTypes.number,
  childrenNum: PropTypes.number
};

export default MainPage;
