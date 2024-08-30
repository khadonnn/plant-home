import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const Footer = () => {
  return (
    <button className="flex h-[56px] items-center gap-3">
      <span className="flex-shrink-0">
        <img
          alt="user1"
          src="/img/user1.jpg"
          className="h-[40px] w-[40px] rounded-lg object-cover"
        />
      </span>
      <div>
        <span className="mr-auto flex items-start">Erica</span>
        <span>
          <p className="text-sm font-light">erica@example.com</p>
        </span>
      </div>
      <span>
        <ArrowDropUpIcon />
      </span>
    </button>
  );
};

export default Footer;
