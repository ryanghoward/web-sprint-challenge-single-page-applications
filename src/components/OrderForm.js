import React from "react";
import pizza from "../Assets/Pizza.jpg";

const OrderForm = (props) => {
  const {
    formValues,
    inputChange,
    formSubmit,
    formErrors,
    formDisabled,
    confirmation,
  } = props;

  const onChange = (event) => {
    const { customerName, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;

    inputChange(customerName, valueToUse);
  };

  const onClick = () => {
    console.log(confirmation);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  };

  return (
    <form id='pizza-form' className='form-container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <img className='home-image' src={pizza} alt='Pizza' />
        <h2>Whatchyu want on yo Pizza bruh?</h2>
        <div className='errors'>
          <div>{formErrors.name}</div>
          <div>{formErrors.pizzaSize}</div>
        </div>
        <label>
          Name:
          <input
            id='name-input'
            type='text'
            name='name'
            value={formValues.name}
            onChange={onChange}
          />
        </label>
        <label>
          Size:
          <select
            id='size-dropdown'
            name='size'
            value={formValues.size}
            onChange={onChange}
          >
            <option value=''>Select a Size</option>
            <option value='Small'>Small - 10 inches</option>
            <option value='Medium'>Medium - 12 inches</option>
            <option value='Large'>Large - 14 inches</option>
            <option value='Extra Large'>Extra Large - 16 inches</option>
          </select>
        </label>

        <div className='toppings'>
          <label>
            Pepperoni
            <input
              type='checkbox'
              name='pepperoni'
              onChange={onChange}
              value={formValues.pepperoni}
            />
          </label>
          <label>
            Cheese
            <input
              type='checkbox'
              name='cheese'
              onChange={onChange}
              value={formValues.cheese}
            />
          </label>
          <label>
            Sausage
            <input
              type='checkbox'
              name='sausage'
              onChange={onChange}
              value={formValues.sausage}
            />
          </label>
          <label>
            Bacon
            <input
              type='checkbox'
              name='bacon'
              onChange={onChange}
              value={formValues.bacon}
            />
          </label>
          <label>
            Pineapple
            <input
              type='checkbox'
              name='pineapple'
              onChange={onChange}
              value={formValues.pineapple}
            />
          </label>
          <label>
            Onion
            <input
              type='checkbox'
              name='onion'
              onChange={onChange}
              value={formValues.onion}
            />
          </label>
          <label>
            Olives
            <input
              type='checkbox'
              name='olives'
              onChange={onChange}
              value={formValues.olives}
            />
          </label>
          <label>
            Special
            <input id='special-text' type='text' name='Special' />
          </label>
        </div>
      </div>
      <button onClick={onClick} id='order-button' disabled={formDisabled}>
        Submit
      </button>
    </form>
  );
};

export default OrderForm;
