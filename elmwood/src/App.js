import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path = '/home' component = {Home} />
      </div>
    );
  }
}

export default App;
