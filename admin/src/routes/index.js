import Account from '../pages/account';
import Category from '../pages/category';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import Product from '../pages/product';
import Promotion from '../pages/promotion';
import Chat from '../pages/chat';

import HousePlant from '../pages/product/houseplant';
import OfficePlant from '../pages/product/officeplant';
import StorePlant from '../pages/product/storeplant';
import HouseDetail from '../pages/product/houseplant/HouseDetail';
import OfficeDetail from '../pages/product/officeplant/OfficeDetail';
import StoreDetail from '../pages/product/storeplant/StoreDetail';


import HomeIcon from '@mui/icons-material/Home';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WorkIcon from '@mui/icons-material/Work';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BungalowIcon from '@mui/icons-material/Bungalow';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
//public routes
const publicRoutes = [];
//private routes
const privateRoutes = [
  { path: '/', component: Home, name: 'Home', icon: <HomeIcon /> },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard', icon: <ShowChartIcon /> },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    icon: <LocalFloristIcon />,
    child: [
      {
        path: '/houseplant',
        component: HousePlant,
        name: 'House Plant',
        icon: <BungalowIcon />,
        child: [{ path: '/:houseId', component: HouseDetail }],
      },
      {
        path: '/officeplant',
        component: OfficePlant,
        name: 'Office Plant',
        icon: <HomeRepairServiceIcon />,
        child: [{ path: '/:officeId', component: OfficeDetail }],
      },
      {
        path: '/plant',
        component: StorePlant,
        name: 'Store Plant',
        icon: <StorefrontIcon />,
        child: [{ path: '/:storeId', component: StoreDetail }],
      },
    ],
  },
  { path: '/promotion', component: Promotion, name: 'Promotion', icon: <EventAvailableIcon /> },
  { path: '/category', component: Category, name: 'Category', icon: <FolderCopyIcon /> },
  { path: '/chat', component: Chat, name: 'Chat', icon: <ChatIcon /> },
  { path: '/account', component: Account, name: 'Account', icon: <AccountCircleIcon /> },
  { path: '/account', component: Account, name: 'Account', icon: <AccountCircleIcon /> },

];
export { privateRoutes, publicRoutes };
