import React from 'react';
import logo from '../assets/img/logo.png';

function Navbar() {
  return(
    <div className="wrapper">
      <style jsx>{`
        .wrapper {
          box-shadow: 0px 2px rgba(0, 0, 0, .2);
          position: sticky;
          top: 0;
          width: 100%;
          background-color: white;
        }
        .navBar {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          max-width: 1000px;
          margin: auto;
        }
        .navBar::after {
          box-shadow: 0px 1px rgba(0,0,0,0.5);
        }
        .upperNav {
          font-size: 11px;
          display: flex;
          justify-content: space-between;
        }
        .upperNav a {
          color: #1994D7;
          margin: 0px 20px;
        }
        .upperNav .show {
          color: #78899E;
        }
        .upperNav .links {
          display: flex;
          align-items: center;
        }
        .upperNav input {
          border-radius: 10px;
        }
        .upperNav .divider {
          font-size: 14px;
        }
        .lowerNav {
          display: flex;
          font-size: 14px;
          width: 90%;
          justify-content: space-between;
          align-items: center;
        }
        .parks {
          overflow: hidden;
        }
        .parksContent {
          display: none;
          position: absolute;
          overflow: hidden;
          background-color: white;
          z-index: 1;
        }
        .parks:hover .parksContent {
          display: block;
        }
        .thingsToDo {
          overflow: hidden;
        }
        .thingsToDoContent {
          display: none;
          position: absolute;
          overflow: hidden;
          background-color: white;
          z-index: 1;
        }
        .thingsToDo:hover .thingsToDoContent {
          display: block;
        }
        .disneyContent {
          display: none;
          position: absolute;
          overflow: hidden;
          background-color: white;
          z-index: 1;
        }
        .myDisneyland {
          overflow: hidden;
        }
        .myDisneyland:hover .disneyContent {
          display: block;
        }
      `}</style>
      <div className="navBar">
        <div className="upperNav">
          <span className="show">Show Disney.com</span>
          <div className="links">
            <a href="#">Sign in or Create Account</a>
            <span className="divider">|</span>
            <a href="#">United States (English)</a>
            <span className="divider">|</span>
            <a href="#">Help</a>
            <input type="text" value="search disneyland.com" />
          </div>
        </div>

        <div className="lowerNav">
          <a href="#"><img src={logo} /></a>
          <div className="parks">
            <span>Parks & Tickets</span>
            <div className="parksContent">
              <a href="#">Theme Parks</a><br />
              <a href="#">Tickets</a><br />
              <a href="#">Ticket Options</a><br />
              <a href="#">Photography</a><br />
            </div>
          </div>
          <span>Places to Stay</span>
          <div className="thingsToDo">
            <span>Things to Do</span>
            <div className="thingsToDoContent">
              <a href="#">Attractions</a>
            </div>
          </div>
          <span>Annual Passports</span>
          <span>Shop</span>
          <span>Cart</span>
          <div className="myDisneyland">
            <span className="disneyLink">My Disneyland</span>
            <div className="disneyContent">
              <a href="#">My Hotel Reservations</a><br />
              <a href="#">My Dining Reservations</a><br />
              <a href="#">My Annual Passports</a><br />
              <a href="#">My Photos</a><br />
              <a href="#">My Wishlist</a><br />
              <a href="#">Sign in or Create Account</a><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;