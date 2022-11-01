import { useState } from 'react';

import avatar from './images/avatar-3.jpg';
import shareIcon from './images/shareIcon.svg';
import './App.css';


function App() {
  const [links, setLinks] = useState([
    { name: 'Twitter Link', url: 'https://google.com' },
    { name: 'Zuri Team', url: 'https://google.com' },
    { name: 'Zuri Books', url: 'https://google.com' },
    { name: 'Python Books', url: 'https://google.com' },
    { name: 'Background Check for Coders', url: 'https://google.com' },
    { name: 'Design Books', url: 'https://google.com' }
  ]);

  return (
    <div className="app">
      <header className="app-header">
        <div className='container col-xxl-8 position-relative'>
          <img src={avatar} className="app-logo rounded-circle" alt="logo" />
          <p className='app-profile-name'>
            Elizabeth Towoju
          </p>
          <img src={shareIcon} className="app-share-link" />
        </div>
      </header>

      <main>
        <div className='container col-xxl-8'>
          <div className="app-links  list-group">
            {links.map((item, i) => (
              <a href="#" className="app-link" aria-current="true" key={i}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
