import React from 'react';
import { privateRoutes } from '../../../routes';
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  const handleBtn = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <aside className="h-full w-[256px] bg-cus-dark py-2 text-white">
      {privateRoutes.map((route) => (
        <li className="list-none py-2" key={route.path}>
          <button onClick={() => handleBtn(route.path)}>{route.name}</button>
        </li>
      ))}
    </aside>
  );
};

export default SideBar;
