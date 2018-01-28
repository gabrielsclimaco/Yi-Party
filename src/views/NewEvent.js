import React, { Component } from 'react';
import {
  FirstStep,
} from '../components/NewEvent'
import './NewEvent.css';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      image: null,
    }
  }


  render() {
    return (
      <div className='NewEvent'>
        <FirstStep
          onTitleTyped={(title) => {this.setState({ title })}}
          onFileSelected={(image) => {this.setState({ image })}}
        />
      </div>
    );
  }
}

export default NewEvent;
