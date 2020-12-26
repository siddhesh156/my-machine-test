import logo from './logo.svg';
import './App.css';
import {Switch, BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import Home from "./Containers/Home/Home"
import EmployeeList from "./Containers/EmployeeList/EmployeeList"
import ErrorPage from "./Components/ErrorPage"
import MyTabel from './Components/MyTable';
import MyTabel2 from './Components/MyTable2';



function App() {
  return (
    <Router history={useHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={EmployeeList} />
        {/* <Route path="" component={ErrorPage} /> */}
        <Route path="/table" component={MyTabel} />
        <Route path="/table2" component={MyTabel2} />
      </Switch>
  </Router>
  );
}

export default App;
