import './App.css';
import { Routes } from 'react-router-dom';
import { privateRoutes } from './routes';
import recursiveRoute from './routes/RecursiveRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        {recursiveRoute(privateRoutes)}
      </Routes>
    </div>
  );
}

export default App;
