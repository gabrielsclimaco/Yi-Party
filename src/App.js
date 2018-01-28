import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar'
import NewEvent from './views/NewEvent';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <NewEvent />
      </div>
    );
  }
}

export default App;
