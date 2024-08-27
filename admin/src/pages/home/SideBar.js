import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const SimpleMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button variant="outlined" className='bg-cus-dark rounded-lg border-[1px] hover:border-gray-400 border-gray-600 text-white' onClick={handleClick}>Open Menu</Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Item 1</MenuItem>
                <MenuItem onClick={handleClose}>Item 2</MenuItem>
                <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
        </div>
    );
};

export default SimpleMenu;
