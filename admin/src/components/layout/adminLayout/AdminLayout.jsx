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
    <div className="admin-layout relative h-screen bg-cus-white pb-2 pl-6 pr-2 pt-2 text-base font-medium text-cus-dark dark:bg-cus-dark dark:text-cus-white lg:ring-zinc-800">
      <div className="flex h-full">
        <div className="">
          <div className="p-4">{header}</div>
          <div className="min-w-[256px] text-cus-white dark:text-cus-dark">
            <hr className="-ml-6 mt-3 border-t-[1px] border-gray-400 dark:border-gray-800" />
            {sidebar}
          </div>
          <div className="absolute bottom-5 min-w-[256px]">
            <hr className="-ml-6 mb-3 border-t-[1px] border-gray-400 dark:border-gray-800" />
            {footer}
          </div>
        </div>
        <div className="grow bg-white md:rounded-lg lg:rounded-lg lg:p-1 lg:shadow-sm lg:ring-1 lg:ring-zinc-400 dark:lg:bg-zinc-800 dark:lg:ring-white/10">
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
