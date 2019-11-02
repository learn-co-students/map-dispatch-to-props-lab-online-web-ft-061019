import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { connect } from 'http2';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};


export default App;
