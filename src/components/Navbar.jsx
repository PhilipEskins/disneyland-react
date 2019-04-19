import React from 'react';
import logo from '../assets/img/logo.png'

function Navbar() {
  return(
    <div>
      Show Disney.com
      Sign In or Create Account | United States(English) | Help
      <input placeholder="search disneyland.com"></input>
      <img src={logo} />
      Parks & Tickets
      Places to Stay
      Things to do
      Annual Passports
      Shop
      Cart
      My Disneyland
    </div>
  );
}

export default Navbar;