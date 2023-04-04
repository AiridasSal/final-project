import React from 'react';
import AppRouter from './components/Routes/AppRouter';
import { UserProvider } from './components/UserContext';
import './style.css';
const App = () => (
  <UserProvider>
    <AppRouter></AppRouter>
  </UserProvider>
);

export default App;
