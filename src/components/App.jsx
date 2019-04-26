import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import AttractionList from './AttractionList';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adults: 2,
      children: 0
    }
    this.handleAdult = this.handleAdult.bind(this);
    this.handleChildren = this.handleChildren.bind(this);
  }

  handleAdult(newNum) {
    console.log(newNum);
    this.setState({adults: newNum});
  }

  handleChildren(newNum) {
    this.setState({children: newNum})
  }

  render() {
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={()=><MainPage onAdult={this.handleAdult} onChildren={this.handleChildren} adultNum={this.state.adults} childrenNum={this.state.children}/>} />
          <Route path='/attractions' component={AttractionList} />
          <Route path='/attractions/:attractionId' component={AttractionList} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
