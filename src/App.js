import logo from './logo.svg';
import './App.css';
import {Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Components/Home"
import ErrorPage from "./Components/ErrorPage"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="" component={ErrorPage} />
      </Switch>
  </Router>
  );
}

export default App;
