import React from 'react';
import MaterialIcon from 'material-icons-react';
import './NavigationBar.css';

function NavigationBar(props) {
  return (
    <div className="Navigation-bar">
      <span className="Navigation-label"><b>YI</b> Party</span>
      <div className="Navigation-icon">
        <MaterialIcon
          icon="menu"
          size={40}
          color='white'
        />
      </div>
    </div>
  );
}

export default NavigationBar;
