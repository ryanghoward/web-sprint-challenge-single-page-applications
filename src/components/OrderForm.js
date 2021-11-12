import React from "react";

const OrderForm = (props) => {
  const { fromValues, updateForm, submitForm, formErrors } = props;

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;

    updateForm(name, valueToUse);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };

  return (
    <form id='pizza-form' onSubmit={onSubmit}>
      <label>
        Name:
        <input
          id='name-input'
          type='text'
          name='name'
          value={fromValues.name}
          onChange={onChange}
        />
      </label>
      <label>
        Size:
        <select
          id='size-dropdown'
          name='size'
          value={fromValues.size}
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
            checked={fromValues.pepperoni}
          />
        </label>
        <label>
          Cheese
          <input
            type='checkbox'
            name='cheese'
            onChange={onChange}
            checked={fromValues.cheese}
          />
        </label>
        <label>
          Sausage
          <input
            type='checkbox'
            name='sausage'
            onChange={onChange}
            checked={fromValues.sausage}
          />
        </label>
        <label>
          Bacon
          <input
            type='checkbox'
            name='bacon'
            onChange={onChange}
            checked={fromValues.bacon}
          />
        </label>
        <label>
          Pineapple
          <input
            type='checkbox'
            name='pineapple'
            onChange={onChange}
            checked={fromValues.pineapple}
          />
        </label>
        <label>
          Onion
          <input
            type='checkbox'
            name='onion'
            onChange={onChange}
            checked={fromValues.onion}
          />
        </label>
        <label>
          Olives
          <input
            type='checkbox'
            name='olives'
            onChange={onChange}
            checked={fromValues.olives}
          />
        </label>
      </div>
      <div className='errors'>
        <div>{formErrors.name}</div>
      </div>
      <label>
        <button id='order-button' type='submit' name='submitButton'>
          Add to Order
        </button>
      </label>
    </form>
  );
};
