import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import Login from "./components/Login";
import Success from "./components/Success";
import Failure from "./components/Failure";
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/success" component={Success} />
          <Route path="/failure" component={Failure} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
