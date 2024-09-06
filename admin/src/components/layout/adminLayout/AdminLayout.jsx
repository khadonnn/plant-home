import { Button, FormControlLabel, Switch } from '@mui/material';
import React, { useEffect, useState } from 'react';

import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
const AdminLayout = ({ header, sidebar, content, footer, children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className="admin-layout relative h-screen bg-cus-white pb-2 pr-2 pt-2 text-base font-medium text-cus-dark dark:bg-cus-dark dark:text-cus-white lg:ring-zinc-800">
      <div className="flex h-full">
        <div className="flex flex-col">
          <div className="pr-1">{header}</div>
          <div className="min-w-[256px] flex-grow overflow-y-auto">
            <hr className="border-border-lig/20 dark:border-border-dark -ml-6 mt-2 border-t-[1px]" />
            {sidebar}
          </div>
          <div className="min-w-[256px]">
            <hr className="border-border-lig/20 dark:border-border-dark -ml-6 mb-3 border-t-[1px]" />
            {footer}
          </div>
        </div>
        <div className="flex-grow bg-cus-cream md:rounded-lg lg:rounded-lg lg:p-1 lg:shadow-sm lg:ring-1 lg:ring-zinc-400/20 dark:lg:bg-zinc-800 dark:lg:ring-white/10">
          <div className="h-12px flex justify-end">
            <Button
              className="min-w-0 p-1"
              onClick={() => setDarkMode(!darkMode)}
              variant="outlined"
            >
              {darkMode ? <Brightness2RoundedIcon /> : <WbSunnyRoundedIcon />}
            </Button>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
