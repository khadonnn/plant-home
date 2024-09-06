import React from 'react';
import Logo from './Logo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className="mx-2 ml-2 mr-2 flex justify-evenly rounded-lg bg-cus-cream p-2 dark:bg-cus-brown lg:shadow-sm lg:ring-1 lg:ring-gray-400/20 dark:lg:bg-zinc-800 dark:lg:ring-white/10">
      <span className="h-[25px] w-[25px]">
        <Logo />
      </span>
      <span className="flex-1 text-center">Catalyst</span>
      <span className="ml-auto flex items-end">
        <ArrowDropDownIcon />
      </span>
    </div>
  );
};

export default Header;
