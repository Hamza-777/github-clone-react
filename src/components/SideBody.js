import React from 'react';
import BookIcon from '@material-ui/icons/Book';
import SidebarComponent from './SidebarComponent';
import './Sidebody.css';

const SideBody = () => {
  return (
    <div className="sidebody">
      <div className="sidebody__top">
        <h3>Repositories</h3>
        <button>
          <BookIcon fontSize="small" />
          New
        </button>
      </div>
      <input type="text" placeholder="Find a repository..." />
      <div className="sidebody__bottom">
        <SidebarComponent title="md-amir-gauhar/react-expense-tracker" />
        <SidebarComponent title="md-amir-gauhar/react-hooks" />
        <SidebarComponent title="md-amir-gauhar/react-hooks" />
        <SidebarComponent title="md-amir-gauhar/react-hooks" />
        <SidebarComponent title="md-amir-gauhar/react-hooks" />
        <SidebarComponent title="md-amir-gauhar/react-hooks" />
        <SidebarComponent title="md-amir-gauhar/react-hooks" />
        <SidebarComponent title="md-amir-gauhar/react-hooks" />
        <br />
        <hr />
        <br />
        <h3 className="heading">Working with a team?</h3>
        <p>GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get access to more features.</p>
      </div>
    </div>
  )
}

export default SideBody
