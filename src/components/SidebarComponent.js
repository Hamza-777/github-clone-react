import React from 'react';
import BookIcon from '@material-ui/icons/Book';
import './SidebarComponent.css'

const SidebarComponent = ({title}) => {
  return (
    <div className="sidebarComponent">
      <BookIcon fontSize="small" />
      <h3>{title}</h3>
    </div>
  )
}

export default SidebarComponent;
