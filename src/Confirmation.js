import React from "react";

function Confirmation({ details }) {
  if (!details) {
    return <h3>Loading your order details...</h3>;
  }

  return (
    <div className='form-group submit'>
      <h2>{details.customerName}'s Order: </h2>

      <div className='form-group inputs'>
        <p>Pizza Size: {details.pizzaSize}</p>
        {!!details.toppings && !!details.toppings.length && (
          <div>
            Toppings:
            <ul>
              {details.toppings.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <p>Special Instructions: {details.special}</p>
      </div>
    </div>
  );
}

export default Confirmation;
