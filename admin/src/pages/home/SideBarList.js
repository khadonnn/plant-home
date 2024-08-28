import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'account',
    title: 'Account',
    icon: <AccountCircleOutlinedIcon />,
  },
  {
    segment: 'category',
    title: 'Category',
    icon: <FilePresentOutlinedIcon />,
  },
  {
    segment: 'chat',
    title: 'Chat',
    icon: <ChatOutlinedIcon />,
  },
  {
    segment: 'promotion',
    title: 'Promotion',
    icon: <EventAvailableOutlinedIcon />,
  },
  {
    kind: 'divider',
  },

  {
    segment: 'product',
    title: 'Product',
    icon: <SpaOutlinedIcon />,
    children: [
      {
        segment: 'houseplant',
        title: 'House Plant',
        icon: <LocalOfferOutlinedIcon className="rotate-90 inline-block" />,
      },
      {
        segment: 'storeplant',
        title: 'Store Plant',
        icon: <LocalOfferOutlinedIcon className="rotate-90 inline-block" />,
      },
      {
        segment: 'officeplant',
        title: 'Office Plant',
        icon: <LocalOfferOutlinedIcon className="rotate-90 inline-block" />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    segment: 'setting',
    title: 'Setting',
    icon: <SettingsOutlinedIcon />,
  },
  {
    segment: 'support',
    title: 'Support',
    icon: <ContactSupportOutlinedIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
