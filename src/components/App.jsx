import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import AttractionList from './AttractionList';
import AttractionDetail from './AttractionDetail';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adults: 2,
      children: 0,
      selectedAttraction: null,
      masterAttractionList: {
        aliceInWonderland:
        {
          url: 'alice-in-wonderland',
          name: 'Alice in Wonderland',
          height: 'Any Height',
          type: ['Slow Rides', 'Dark', 'Loud'],
          location: 'Disneyland Park, Fantasyland',
          teaser: 'Take a topsy-turvy trip into the nonsensical world of Disney’s Alice in Wonderland aboard an oversized caterpillar.'
        },
        animationAcademy:
        {
          url: 'animation-academy',
          name: 'Animation Academy',
          height: 'Any Height',
          type: ['Character Experience', 'Discovery', 'Indoor', 'Interactive'],
          location: 'Disney California Adventure Park, Hollywood Land',
          teaser: 'Draw your very own character sketch under the guidance of a talented animator.'
        },
        autopia:
        {
          url: 'autopia',
          name: 'Autopia',
          height: '32in (81cm) or taller',
          type: ['Slow Rides', 'Loud', '1955 Original Ride', 'Interactive', 'Rider Switch'],
          location: 'Disneyland Park, Tomorrowland',
          teaser: 'Put the pedal to the metal on an unforgettable road trip along a miniature motorway.'
        }
      }
    };
    this.handleAdult = this.handleAdult.bind(this);
    this.handleChildren = this.handleChildren.bind(this);
    this.handleChangingSelectedAttraction = this.handleChangingSelectedAttraction.bind(this);
  }

  handleAdult(newNum) {
    this.setState({adults: newNum});
  }

  handleChildren(newNum) {
    this.setState({children: newNum});
  }

  handleChangingSelectedAttraction(attractionId){
    this.setState({selectedAttraction: attractionId});
  }

  render() {
    // if (this.state.selectedAttraction != null) {
    //   let storage = this.state.masterAttractionList;
    //   let temp = this.state.selectedAttraction;
    //   let name = storage + temp;
    //   console.log(name)
    // }
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' render={()=><MainPage onAdult={this.handleAdult} onChildren={this.handleChildren} adultNum={this.state.adults} childrenNum={this.state.children}/>} />
          <Route exact path='/attractions' render={()=> <AttractionList masterAttractionList={this.state.masterAttractionList} selectedAttraction={this.state.selectedAttraction} onChangingSelectedAttraction={this.handleChangingSelectedAttraction}/>} />
          <Route path='/attractions/:attractionId' component={AttractionDetail} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
