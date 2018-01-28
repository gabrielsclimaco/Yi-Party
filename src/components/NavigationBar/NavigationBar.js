import React from 'react';
import FontAwesome from 'react-fontawesome';
import './NavigationBar.css';

function NavigationBar(props) {
  return (
    <div className="Navigation-bar">
      <span className="Navigation-label"><b>YI</b> Party</span>
      <FontAwesome className="Navigation-icon" name="bars" size="50px" />
    </div>
  );
}

export default NavigationBar;
