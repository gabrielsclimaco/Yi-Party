import React from 'react';
import SideBarItem from './SideBarItem'
import './SideBar.css';

function SideBar(props) {
  return (
    <div className="SideBar">
      <div
        className='SideBar-profileImage'
      />
      <span className='SideBar-profileName'>Nyan Cat</span>
      <span className='SideBar-profileRole'>Produtor</span>
      <div className='SideBar-separator'/>
      <SideBarItem
        icon='dashboard'
        label='Dashboard'
        />
      <SideBarItem
        icon='person'
        label='Perfil'
      />
    </div>
  );
}

export default SideBar;
