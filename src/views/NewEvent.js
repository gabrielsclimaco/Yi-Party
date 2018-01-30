import React, { Component } from 'react';
import {
  FirstStep,
  ThirdStep,
} from '../components/NewEvent'
import './NewEvent.css';

class NewEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      image: null,
      local: {},
    }

    this.handlePlaceInput = this.handlePlaceInput.bind(this);
  }

  handlePlaceInput(field) {
    let local = this.state.local;
    
    local[`${field.attribute}`] = field.value;
    
    this.setState({local});
  }

  render() {
    return (
      <div className='NewEvent'>
        <FirstStep
          className='item'
          onTitleTyped={(title) => {this.setState({ title })}}
          onFileSelected={(image) => {this.setState({ image })}}
        />
        <ThirdStep
          className='item'
          onFieldTyped={field => {this.handlePlaceInput(field)}}
        />
      </div>
    );
  }
}

export default NewEvent;
