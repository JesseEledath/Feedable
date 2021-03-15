import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Cart from "./screens/Cart/Cart";
import Create from "./screens/Create/Create";
import Home from "./screens/Home/Home";
import LandingPage from "./screens/LandingPage/LandingPage";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import SignUp from "./screens/SignUp/SignUp";
import { verifyUser } from "./services/users";

import "./App.css";
import AllUsers from "./screens/AllUsers/AllUsers";

const App = () => {
  const [user, setUser] = useState(null);
  const [toggleLoad, setToggleLoad] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  useEffect(() => {
    setTimeout((toggleLoad) => {
      setToggleLoad(true);
    }, 1500);
  });

  return (
    <div className="App">
      {!toggleLoad ? (
        <div>Loading...</div>
      ) : (
        <Switch>
          <Route exact path="/">
            <LandingPage user={user} />
          </Route>

          <Route path="/sign-up">
            <SignUp setUser={setUser} />
          </Route>

          <Route path="/sign-in">
            <SignIn setUser={setUser} />
          </Route>

          <Route path="/sign-out">
            <SignOut setUser={setUser} clearUser={clearUser} />
          </Route>

          <Route exact path="/products">
            <CartProvider>
              <Home user={user} />
            </CartProvider>
          </Route>

          <Route exact path="/products/:id">
            <CartProvider>
              <ProductDetail user={user} />
            </CartProvider>
          </Route>

          <Route exact path="/products/:id/edit">
            <ProductEdit user={user} />
          </Route>

          <Route exact path="/cart">
            <CartProvider>
              <Cart user={user} />
            </CartProvider>
          </Route>

          <Route exact path="/allusers">
            {user?.role === "Admin" ? (
              <AllUsers user={user} />
            ) : (
              <Redirect to="/products" />
            )}
          </Route>

          <Route exact path="/create">
            {user?.role === "Admin" ? (
              <Create user={user} />
            ) : (
              <Redirect to="/products" />
            )}
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
