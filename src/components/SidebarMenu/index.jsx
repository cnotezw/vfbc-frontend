import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import './styles.css';

export default function TemporaryDrawer({ activePath }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
console.log("activePath: ", activePath)
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: '100vh', background: '#485840' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ color: "#fff"}}>
        <ListItem  disablePadding>
          <Link className='link' to={`${activePath}/plan-your-trip`}>
            <ListItemButton>
                <ListItemText primary={"Plan Your trip"} />
              </ListItemButton>
          </Link>
        </ListItem>
       
        <ListItem disablePadding>
          <Link className='link' to={`${activePath}/imbabala-lodge`}>
            <ListItemButton>
                <ListItemText primary={"Useful Links"} />
              </ListItemButton>
          </Link>
        </ListItem>
        {activePath !== '/' ?
        <ListItem disablePadding>
        <Link className='link' to={`${activePath}/blog`}>
          <ListItemButton>
              <ListItemText primary={"Blog"} />
            </ListItemButton>
        </Link>
      </ListItem> 
      : <ListItem disablePadding>
          <Link className='link' to={`/katombora-islands/blog`}>
            <ListItemButton>
                <ListItemText primary={"Blog"} />
              </ListItemButton>
          </Link>
        </ListItem> }
        
      </List>
      <Divider />
      <List sx={{ color: "#fff"}}>
      <ListItem  disablePadding>
          <Link className='link' to="/">
            <ListItemButton>
                <ListItemText primary={"Home"} />
              </ListItemButton>
          </Link>
        </ListItem>
        <ListItem  disablePadding>
          <Link className='link' to="/katombora-islands">
            <ListItemButton>
                <ListItemText primary={"Katombora Islands"} />
              </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link className='link' to="/imbabala-lodge">
            <ListItemButton>
                <ListItemText primary={"Imbabala Lodge"} />
              </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ color: '#ffffff', minWidth: "auto"}}><MenuIcon /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}