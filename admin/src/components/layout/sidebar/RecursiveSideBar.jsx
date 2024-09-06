import React, { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecursiveSideBar = ({ routes, parentPath = '', isRecursive = false }) => {
  const pathname = window.location.pathname;
  return (
    <List disablePadding={isRecursive} component={isRecursive ? 'div' : null}>
      {routes.map((route) => (
        <NavBarBtn
          route={route}
          key={route.path}
          isRecursive={isRecursive}
          currentPath={pathname}
          parentPath={parentPath}
        />
      ))}
    </List>
  );
};
const NavBarBtn = ({ route, parentPath = '', isRecursive }) => {
  const isNavBar = route && route.name && route.path && route.component;
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
  if (!isNavBar) return null;

  return (
    <div>
      <ListItemButton
        key={fullPath}
        onClick={handleBtn}
        sx={isRecursive ? { pl: 2 * levelOfPath } : {}}
      >
        <ListItemIcon className="min-w-min p-2 text-inherit">
          {route.icon ? route.icon : null}
        </ListItemIcon>
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
    </div>
  );
};

export default RecursiveSideBar;
