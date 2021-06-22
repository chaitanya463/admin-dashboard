import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Home from "./pages/home/Home";

import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <UserList />
          </Route>
          <Route path="/users/:userId">
            
          </Route>
          <Route path="*">
            PageNot found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
