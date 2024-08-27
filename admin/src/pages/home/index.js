import React from 'react';
import { Box } from '@mui/material';
import SimpleMenu from './SideBar'
const Home = () => {
    return (
        <div className='bg-cus-dark'>
            <Box sx={{ display: 'flex' }}>
                <Box className="xl:w-1/5 md:w-2/5 bg-cus-dark border-r border-gray-600 p-2">
                    <SimpleMenu />
                </Box >

                <Box className="xl:w-4/5 md:w-3/5 bg-lightblue p-2">
                    <p>hi</p>
                </Box >
            </Box>

        </div>
    );
};
export default Home;