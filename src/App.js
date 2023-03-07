import './App.css'
import Navigation from './components/Navigation'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React, { useState, createContext } from 'react'
import store from './redux/store'
import LogIn from './components/LogIn'
import Listings from './components/Listings'

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loggedIn ? (
          <Listings />
        ) : (
          <LogIn />
        )}
      </LoginContext.Provider>
    </Provider>
  );
}

export default App;
