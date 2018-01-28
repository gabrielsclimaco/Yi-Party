import React, { Component } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { SideBar } from './components/SideBar';
import NewEvent from './views/NewEvent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="App-page">
          <SideBar className='App-SideBar' />
          <NewEvent />
        </div>
      </div>
    );
  }
}

export default App;
