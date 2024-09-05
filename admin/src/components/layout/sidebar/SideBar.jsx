import React from 'react';
import RecursiveSideBar from './RecursiveSideBar';
const SideBar = ({ routes }) => {
  return (
    <>
      <RecursiveSideBar routes={routes} />
    </>
  );
};

export default SideBar;
