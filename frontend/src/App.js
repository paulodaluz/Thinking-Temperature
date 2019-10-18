import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// Import CSS
import './App.css';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
