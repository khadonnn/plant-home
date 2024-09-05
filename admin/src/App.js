import './App.css';
import { Routes } from 'react-router-dom';
import { privateRoutes } from './routes';
import recursiveRoute from './routes/RecursiveRoute';
import Header from './components/layout/header/Header';
import SideBar from './components/layout/sidebar/SideBar';
import AdminLayout from './components/layout/adminLayout/AdminLayout';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <div className="App">
      <AdminLayout
        header={<Header />}
        sidebar={<SideBar routes={privateRoutes} />}
        content={<Routes>{recursiveRoute(privateRoutes)}</Routes>}
        footer={<Footer />}
      />
    </div>
  );
}

export default App;
