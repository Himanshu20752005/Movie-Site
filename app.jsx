import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './home';
import Navbar from './navbar';
import './App.css';
import Imageslider from './imageslider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <Imageslider />
      </div>
      <Home />
    </>
  );
}

export default App;
