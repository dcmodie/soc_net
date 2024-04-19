import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FeedContainer from './pages/FeedContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <FeedContainer />
      </div>
    </>
  );
}

export default App;
