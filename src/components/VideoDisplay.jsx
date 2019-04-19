import React from 'react';
import video from '../assets/vid/disneyland.mp4';

function VideoDisplay() {
  return (
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          display: grid;
          grid: 1fr 1fr / 1fr;
        }
        .disneyVid {
          grid-row: 1/3;
          grid-column: 1;
          justify-self: center;
          width: 100vw;
          z-index: -1;
        }
        .vidBanner {
          grid-row: 1;
          grid-column: 1;
          color: white;
          justify-self: center;
          align-self: end;
        }
        .extraText {
          grid-row: 2;
          grid-column: 1;
          color: white;
          justify-self: center;
        }
        .tickets {
          margin-left: 100px;
        }
      `}</style>
      <video className="disneyVid" src={video} autoPlay></video>
      <h1 className="vidBanner">There's Never Been a Better Time to Make Some Magic!</h1>
      <p className="extraText">Play Full Video  <span className="tickets">Select Tickets</span></p>
    </div>
  );
}

export default VideoDisplay;