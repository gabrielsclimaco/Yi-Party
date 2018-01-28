import React from 'react';
import MaterialIcon from 'material-icons-react';
import './SideBarItem.css';

function SideBarItem(props) {
  return (
    <div className='SideBarItem'>
      <MaterialIcon
        icon={props.icon}
        size={40}
        color='#D5D5D5'
      />
      <span className='SideBarItem-label' >{ props.label }</span>
    </div>
  );
}

export default SideBarItem;
