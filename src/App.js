import { Route, BrowserRouter as Router, Switch, useLocation } from "react-router-dom";
import "./app.css";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import UserDetails from './pages/userDetails/UserDetails';
import NewUser from './pages/newUser/NewUser';
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from './pages/newProduct/NewProduct';
import AuthPage from "./pages/authentication/AuthPage";

function App() {
  return (
    <Router>
      {false && <Topbar />}
      <div className="container">
        {false && <Sidebar />}
        <Switch>
          <Route path="/auth" >
              <AuthPage/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <UserList />
          </Route>
          <Route path="/users/:userId">
            <UserDetails />
          </Route>
          <Route path='/newUser'>
            <NewUser/>
          </Route>
          <Route path='/products'exact>
            <ProductList/>
          </Route>
          <Route path='/products/:productId'>
            <Product/>
          </Route>
          <Route path='/newProduct'>
            <NewProduct/>
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
