import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

export default function ChatList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      className="max-w-full"
    >
      {Array(20)
        .fill('Chat')
        .map((name, i) => (
          <ListItem key={i} className="hover:bg-gray-100">
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name + ' ' + i} secondary="Jan 9, 2014" />
          </ListItem>
        ))}
    </List>
  );
}
