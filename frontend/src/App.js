import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

// Import CSS
import './App.css';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {

  const PrivateRoute = ({ component: Component }) => (
    <Route
      render={props => isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )}
    />
  )

  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <PrivateRoute path="/home" exact={true} component={Home} />
          <Route path='*' component={Login} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
