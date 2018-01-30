import React from 'react';
import './ButtonWithTopLabel.css';

function ButtonWithTopLabel(props) {
  return (
    <div className='ButtonWithTopLabel'>
      <span className='ButtonWithTopLabel-label'>{ props.topLabel }</span>
      <div
        className='ButtonWithTopLabel-button'
        style={{background: props.color}}
      >
        { props.buttonLabel.toUpperCase() }
      </div>
    </div>
  );
}

export default ButtonWithTopLabel;
