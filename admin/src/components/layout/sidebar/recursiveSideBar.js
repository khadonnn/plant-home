import React from 'react';
import { privateRoutes } from '../../../routes';
const recursiveSideBar = ({ routes }) => {
  return (
    <aside className="h-full w-[256px] bg-cus-dark text-white">
      {routes.map((route) => (
        <li className="list-none py-2.5" key={route.path}>
          <button onClick={() => handleBtn(route.path)}>{route.name}</button>
          {route.child && (
            <ul className="pl-4">
              <recursiveSideBar routes={route.child} />
            </ul>
          )}
        </li>
      ))}
    </aside>
  );
};

export default recursiveSideBar;
