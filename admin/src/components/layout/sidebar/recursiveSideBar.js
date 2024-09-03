import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecursiveSideBar = ({ routes, parentPath = '' }) => {
  console.log({ routes });
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  //control according
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleBtn = (path) => {
    if (path) {
      navigate(path);
    }
    return null;
  };

  return (
    <aside className="h-full w-[256px] bg-cus-dark text-white">
      <ul>
        {routes.map((route) => {
          const isNavBar = route && route.name && route.component && route.path;
          const fullPath = parentPath + route.path;
          if (isNavBar) {
            return (
              <>
                <li className="list-none py-2" key={fullPath}>
                  {route.name && (
                    <>
                      <button
                        onClick={() => handleBtn(fullPath)}
                        className="w-full rounded-sm px-2 py-1 text-left hover:bg-cus-brown"
                      >
                        {route.name}
                      </button>
                    </>
                  )}
                  {route.child && route.child.length > 0 && (
                    <ul className="pl-5">
                      <RecursiveSideBar
                        routes={route.child}
                        parentPath={route.path}
                      />
                    </ul>
                  )}
                </li>
              </>
            );
          }
        })}
      </ul>
    </aside>
  );
};

export default RecursiveSideBar;
