import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import './styles.css';

export default function ItemsList({ data }) {
    // {name, description, image}
  return (
    <List sx={{ width: '100%', maxWidth: 'auto', bgcolor: 'background.paper' }}>
      {data.map((item, i) => {
        return (
            <ListItem alignItems="flex-start" sx={{ padding: 0}}>
                <ListItemAvatar>
                <Avatar sx={{ width: '5rem', height: '5rem'}} alt={item.name} src={item.image} />
                </ListItemAvatar>
                <ListItemText
                    primary={item.name}
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline', textAlign: "justify" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {item.description}
                        </Typography>
                    
                        </React.Fragment>
                    }
                />
                {/* <Divider variant="inset" component="div" /> */}
            </ListItem>
         
        )
      })}
    </List>
  );
}
