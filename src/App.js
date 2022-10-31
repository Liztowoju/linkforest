import { useState } from 'react';

import avatar from './images/avatar-3.jpg';
import shareIcon from './images/shareIcon.svg';
import './App.css';


function App() {
  const [links, setLinks] = useState([
    { name: 'Zuri Link', url: 'https://google.com' }
  ]);


  return (
    <div className="app">
      <header className="app-header">
        <img src={avatar} className="app-logo rounded-circle" alt="logo" />
        <p className='app-profile-name'>
          Elizabeth Towoju
        </p>
        <img src={shareIcon} className="app-share-link" />
      </header>

      <main>
      </main>
    </div>
  );
}

export default App;
