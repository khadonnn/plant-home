import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
const RecursiveSideBar = ({ routes, parentPath = '' }) => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  //control according

  const handleBtn = (path) => {
    if (path) {
      setOpen(!open);
      navigate(path);
    }
    return null;
  };
  const [open, setOpen] = useState(false);
  return (
    <aside className="h-full w-[200px] bg-cus-dark text-white">
      <ul>
        {routes.map((route) => {
          const isNavBar = route && route.name && route.component && route.path;
          const fullPath = parentPath + route.path;
          if (isNavBar) {
            console.log(route.name);
            return (
              <>
                <ul className="list-none py-2" key={fullPath}>
                  <button
                    onClick={() => handleBtn(fullPath)}
                    className="w-full rounded-sm px-2 py-1 pr-5 text-left hover:bg-cus-brown"
                  >
                    {route.name}
                  </button>
                  <List>
                    {route.child && route.name && (
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List className="mt-4 pl-5">
                          <RecursiveSideBar
                            routes={route.child}
                            parentPath={route.path}
                          />
                        </List>
                      </Collapse>
                    )}
                  </List>
                </ul>
              </>
            );
          }
        })}
      </ul>
    </aside>
  );
};

export default RecursiveSideBar;
