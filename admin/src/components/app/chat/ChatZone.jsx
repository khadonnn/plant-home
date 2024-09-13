import React from 'react';
import TabPanel from '@mui/lab/TabPanel';
import { IconButton, TextField, Button } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import ChatList from './ChatList';
import { File, Mic, Send, Smile, Video } from 'lucide-react';

const ChatZone = (props) => {
  const { filter } = props;
  return (
    <TabPanel value={filter} className="h-[90%] p-0">
      <div className="main-contaier grid h-full w-full grid-cols-12">
        <div className="box col-span-4 h-full overflow-y-scroll py-4">
          <TextField
            className="mb-4 w-full"
            id="filled-search"
            label="Search"
            size="small"
            type="search"
            variant="standard"
          />

          <ChatList />
        </div>

        <div className="message relative col-span-8 h-full overflow-y-hidden">
          <div className="absolute left-0 top-0 flex h-16 w-full items-center justify-between bg-neutral-50">
            <span className="flex grow cursor-pointer items-center justify-start px-4">
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <span className="text-gray-500">Name</span>
            </span>

            <span className="px-4">
              <IconButton aria-label="delete" size="small">
                <Video fontSize="inherit" />
              </IconButton>
            </span>
          </div>

          <div className="flex h-full w-full flex-col-reverse overflow-auto px-4 py-20">
            {Array(100)
              .fill('Message')
              .map((name, i) => (
                <div
                  key={i}
                  className={i % 2 === 0 ? 'self-end' : 'self-start'}
                >
                  <span className="rounded-md bg-blue-100 px-4 py-2 text-gray-500">
                    {name + ' ' + i}
                  </span>
                </div>
              ))}
          </div>

          <div className="absolute bottom-0 left-0 flex h-16 w-full items-center bg-neutral-50">
            <IconButton className="p-2" aria-label="delete" size="small">
              <File fontSize="inherit" />
            </IconButton>
            <IconButton className="p-2" aria-label="delete" size="small">
              <Smile fontSize="inherit" />
            </IconButton>
            <IconButton className="p-2" aria-label="delete" size="small">
              <Mic fontSize="inherit" />
            </IconButton>
            <TextField
              InputProps={{
                className: 'rounded-full',
              }}
              size="small"
              fullWidth
              placeholder="Write a message"
            />
            <span className="p-2">
              <IconButton aria-label="delete" size="small">
                <Send fontSize="inherit" />
              </IconButton>
            </span>
          </div>
        </div>
      </div>
    </TabPanel>
  );
};

export default ChatZone;
