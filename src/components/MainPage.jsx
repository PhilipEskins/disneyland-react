import React from 'react';
import VacationBar from './VacationBar';
import VideoDisplay from './VideoDisplay';
import PropTypes from 'prop-types';

function MainPage() {
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
        <VacationBar />
      </div>
      <div className="videoDisplay">
        <VideoDisplay />
      </div>
    </div>
  );
}

MainPage.propTypes = {
  onAdult: PropTypes.func,
  onChildren: PropTypes.func
}

export default MainPage;
