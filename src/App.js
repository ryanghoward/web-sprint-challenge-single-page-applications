import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as yup from "yup";
import formSchema from "./Directory/formSchema";
import Confirmation from "./Confirmation";

//~ Component Imports
import Home from "./components/Home";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import axios from "axios";

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
  customerName: "",
  pizzaSize: "",
};

const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [confirmation, setConfirmation] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = (evt) => {
    evt.preventDefault();
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
      special: formValues.special.trim(),
    };
    setNewOrder(newOrder);
  };

  const setNewOrder = (newOrder) => {
    setConfirmation(newOrder);
    // setFormValues(initialFormValues);
    axios
      .post(`https://reqres.in/api/orders`, newOrder)
      .then((res) => {
        console.log(res.data);
        setFormValues(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className='container'>
      <Header />
      {/* <Switch> */}
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
        />
      </Route>
      <Route path='/order/confirmation'>
        <Confirmation details={confirmation} />
      </Route>
      {/* </Switch> */}
    </div>
  );
}

export default App;
