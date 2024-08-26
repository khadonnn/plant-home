import './App.css';
import { Router, Routes } from 'react-router-dom';
import { privateRoutes } from './routes';
import RecursiveRoute from './routes/RecursiveRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <RecursiveRoute routes={privateRoutes} />
      </Routes>
    </div>
  );
}

export default App;
