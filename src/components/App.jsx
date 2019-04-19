import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import AttractionList from './AttractionList';

function App() {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/attractions' component={AttractionList} />
        <Route path='/attractions/:attractionId' component={AttractionList} />
      </Switch>
    </div>
  );
}

export default App;