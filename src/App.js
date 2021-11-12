import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import * as yup from "yup";
import schema from "./Directory/formSchema";

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
  const [confirmation, setConfirmation] = useState(initialFormValues);

  const setNewOrder = (newOrder) => {
    setConfirmation(newOrder);
    setFormValues(initialFormValues);
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      customerName: formValues.customerName.trim(),
      pizzaSize: formValues.pizzaSize,
      toppings: [
        "pepperoni",
        "cheese",
        "sausage",
        "bacon",
        "pineapple",
        "onion",
        "olives",
      ].filter((topping) => !!formValues[topping]),
      other: formValues.other.trim(),
    };
    setNewOrder(newOrder);
  };

  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route>
          <Home exact path='/' />
        </Route>
        <Route path='/pizza'>
          <OrderForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
