import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const RecursiveSideBar = ({ routes, isRecursive = false, parentPath = '' }) => {
  const pathname = window.location.pathname;

  return (
    <List disablePadding={isRecursive} component={isRecursive ? 'div' : null}>
      {routes.map((route) => (
        <NavBarBtn
          key={route.path}
          route={route}
          currentPath={pathname}
          isRecursive={isRecursive}
          parentPath={parentPath}
        />
      ))}
    </List>
  );
};

const NavBarBtn = ({ route, parentPath = '', isRecursive }) => {
  const isNavBar = route && route.name && route.component && route.path;
  const fullPath = parentPath + route.path;
  const levelOfPath = fullPath.split('/').length - 1;
  const isHasChild =
    !!route.child &&
    !!route.child.length &&
    route.child.filter((child) => child.name).length > 0;

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleBtn = () => {
    navigate(fullPath);
  };

  const handleCollapse = () => {
    isHasChild && setOpen(!open);
  };

  const ArrowIcon = () => {
    return (
      <span
        onClick={(e) => {
          e.stopPropagation();
          handleCollapse();
        }}
      >
        {open ? <ExpandLess /> : <ExpandMore />}
      </span>
    );
  };

  // early return
  if (!isNavBar) return null;

  return (
    <>
      <ListItemButton
        key={fullPath}
        onClick={handleBtn}
        sx={isRecursive ? { pl: 2 * levelOfPath } : {}}
      >
        {/* <ListItemIcon>{route.icon ? route.icon : null}</ListItemIcon> */}

        <ListItemText primary={route.name} />

        {isHasChild ? <ArrowIcon /> : null}
      </ListItemButton>
      {isHasChild && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <RecursiveSideBar
            routes={route.child}
            parentPath={fullPath}
            isRecursive={true}
          />
        </Collapse>
      )}
    </>
  );
};

export default RecursiveSideBar;
