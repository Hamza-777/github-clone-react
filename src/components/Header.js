import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="header__left">
        <GitHubIcon fontSize="large" />
        <input type="text" placeholder="search or jump to..." />
        <h3>Pull Request</h3>
        <h3>Issues</h3>
        <h3>MarketPlace</h3>
        <h3>Explore</h3>
      </div>
      <div className="header__right">
        <NotificationsNoneIcon fontSize='medium' />
        <AddIcon fontSize='medium' />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMXLKNqieu2-tkla29mVEJ8C6KWE8sD6UWA&usqp=CAU" className={classes.small} />
      </div>
    </div>
  )
}

export default Header
