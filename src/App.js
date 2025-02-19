import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Directory/formSchema";
import Confirmation from "./Confirmation";
import "./App.css";

//~ Component Imports
import Home from "./components/Home";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";

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
  special: "",
};

const initialFormErrors = {
  name: "",
  pizzaSize: "",
};

const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [confirmation, setConfirmation] = useState({});
  const [disabled, setDisabled] = useState(initialDisabled);

  // console.log(confirmation);

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = (event) => {
    const newOrder = {
      name: formValues.customerName.trim(),
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
      special: formValues.special.trim(),
    };
    setNewOrder(newOrder);
  };

  const setNewOrder = (newOrder) => {
    axios
      .post(`https://reqres.in/api/orders`)
      .then((res) => {
        // console.log(res.data);
        setConfirmation(newOrder);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
        window.location.href = "/order/confirmation";
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
          <OrderForm
            formValues={formValues}
            inputChange={inputChange}
            formSubmit={formSubmit}
            disabled={disabled}
            formErrors={formErrors}
            confirmation={confirmation}
          />
        </Route>
        <Route>
          <Confirmation details={confirmation} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
