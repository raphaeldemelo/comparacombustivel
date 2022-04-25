import React from 'react';
import Routes from './routes';

import UserProvider from './Contexts/user';

function App() {
  return (
    <UserProvider>
      <div>
        <Routes />
      </div>
    </UserProvider>
  );
}

export default App;