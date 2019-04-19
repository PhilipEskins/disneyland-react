import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import AttractionList from './AttractionList';
import Error404 from './Error404'; 

function App() {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/attractions' component={AttractionList} />
        <Route path='/attractions/:attractionId' component={AttractionList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;