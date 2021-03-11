import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./screens/Cart/Cart";
import Create from "./screens/Create/Create";
import Home from "./screens/Home/Home";
import LandingPage from "./screens/LandingPage/LandingPage";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductEdit from "./screens/ProductEdit/ProductEdit"
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import About from "./screens/About/About"
import {verifyUser} from './services/users'

import './App.css';

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)
  // console.log("App", user)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage user={user}/>
        </Route>
        <Route path="/sign-up">

          <SignUp setUser={setUser}/>

        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser}/>
        </Route>
        <Route path="/sign-out">

          <SignOut setUser={setUser} clearUser={clearUser}/>

        </Route>
        <Route exact path="/products">
          <Home user={user}/>
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail user={user}/>
        </Route>

        <Route exact path="/products/:id/edit">
          <ProductEdit user={user}/>
        </Route>

        <Route exact path="/about">
          <About user={user}/>
        </Route>
        
        <Route exact path="/cart">
          {/* {user ? <Cart user={user} /> : <Redirect to="/sign-up" />} */}
          <Cart user={user}/>
        </Route>



        <Route exact path="/create">

          <Create user={user}/>
        </Route>

      </Switch>
    </div>
  );
};

export default App;
