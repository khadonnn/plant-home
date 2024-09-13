import Title from '../../components/app/Title';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Archive,
  MessageCircle,
  MessageCircleMore,
  MessageSquareText,
} from 'lucide-react';
import ChatZone from '../../components/app/chat/ChatZone';

export default function Chat() {
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section id="message" className="relative h-full w-full scrollbar-none">
      <Title text="Message" />

      <Box className="h-[95%]" sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All" value="all" />
              <Tab label="Read" value="read" />
              <Tab label="Unread" value="unread" />
            </TabList>
          </Box>
          <ChatZone filter="all" />
          <ChatZone filter="read" />
          <ChatZone filter="unread" />
        </TabContext>
      </Box>
    </section>
  );
}
