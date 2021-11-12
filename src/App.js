import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Route>
        <Home />
      </Route>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
