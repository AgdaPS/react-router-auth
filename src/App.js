import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import useToken from './useToken';

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Preferences from './components/Preferences/Preferences';
import TicketForm from './components/TicketForm/TicketForm';
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import ProtectedRoutes from './utils/ProtectedRoute';

function App() {
  const {token, setToken} = useToken();
  console.log(token)

  if(!token) {
    return <BrowserRouter>
            <Switch>
              <Route  path="/login">
                <Login setToken={setToken} />
              </Route>
              <Route path="/">
                <Home logged={token}/>
              </Route>
            </Switch>
          </BrowserRouter>
  }

  return (
    <div>
      {/* <h1>Application</h1> */}
      <BrowserRouter>
        <Switch>
          <Route path="/ticket">
            <TicketForm />
          </Route>
          <Route exact path="/">
            <Home logged={token}/>
          </Route>
          <Route  path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <PublicRoute 
  path="/login" 
  isAuthenticated={isAuthenticated}>
  <Login setToken={setToken}/>
</PublicRoute>
<PublicRoute 
  path="/home" 
  isAuthenticated={isAuthenticated}>
  <Home />
</PublicRoute>
<PrivateRoute 
  path="/ticket"
  isAuthenticated={isAuthenticated}>
  <ProtectedRoutes/>
</PrivateRoute> */}