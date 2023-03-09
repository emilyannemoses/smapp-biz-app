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
        <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loggedIn ? (
          // <Listings />
          "You're logged in"
        ) : (
          <LogIn />
        )}
      </LoginContext.Provider>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
