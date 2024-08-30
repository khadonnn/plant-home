import React from 'react';
import Logo from './Logo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className="mr-6 flex items-center gap-3">
      <span className="h-[25px] w-[25px]">
        <Logo />
      </span>
      <span>Catalyst</span>
      <span className="ml-auto flex items-end">
        <ArrowDropDownIcon />
      </span>
    </div>
  );
};

export default Header;
