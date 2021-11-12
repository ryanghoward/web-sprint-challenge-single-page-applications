import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Cheesus Crust</h1>
      <p>The power of Crust compels you</p>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link id='order-pizza' to='/pizza'>
        <button>Order Pizza</button>
      </Link>
    </div>
  );
}

export default Header;
