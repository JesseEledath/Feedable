import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./screens/Cart/Cart";
import Create from "./screens/Create/Create";
import Home from "./screens/Home/Home";
import LandingPage from "./screens/LandingPage/LandingPage";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import Navbar from "./components/shared/Nav/Navbar";


import './App.css';


const App = () => {
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser()
  //     user ? setUser(user) : setUser(null)
  //   }
  //   fetchUser()
  // }, [])

  // const clearUser = () => setUser(null)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        {/* <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-out">
          <SignOut />
        </Route> */}
        <Route exact path="/products">
          <Home />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        {/* 
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/create">
          {user ? <Create user={user} /> : <Redirect to="/sign-up" />}
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;
