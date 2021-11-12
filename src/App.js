import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

const initialFormValues = {
  customerName: "",
  pizzaSize: "",
  pepperoni: false,
  cheese: false,
  sausage: false,
  bacon: false,
  pineapple: false,
  onion: false,
  olives: false,
  other: "",
};

const initialFormErrors = {
  customerName: "",
  pizzaSize: "",
};

const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
