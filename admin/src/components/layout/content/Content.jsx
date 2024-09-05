import React from 'react';

const Header = () => {
  return (
    <div className="flex h-16 items-center bg-blue-500 p-4 text-white">
      <button className="rounded bg-blue-700 px-4 py-2">Dark Mode</button>
    </div>
  );
};
const Content = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Content;
