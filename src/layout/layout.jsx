import React from "react";
import Navbar from "../components/pages/Navbar";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import NotFound from "../components/pages/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "../components/pages/AddUser";
import EditUser from "../components/pages/EditUser";
import Profile from "../components/pages/Profile";

const Layout = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/user/add" component={AddUser}></Route>
          <Route exact path="/user/edit/:id" component={EditUser}></Route>
          <Route exact path="/user/:id" component={Profile}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Layout;
