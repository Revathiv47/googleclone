import './App.css';
import React from 'react';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Search';
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
     <Route path="/search" component={Search} exact={true}>
        <SearchPage />
      </Route>
      
     <Route path="/">
      <Home />
      </Route>
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
