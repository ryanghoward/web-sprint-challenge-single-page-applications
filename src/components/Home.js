import React from "react";
import { Link } from "react-router-dom";
import pizza from "../Assets/Pizza.jpg";

function Home() {
  return (
    <div className='home-wrapper'>
      <img className='home-image' src={pizza} alt='Pizza' />
      <Link to='/pizza'>
        <button className='order-button'>Place order</button>
      </Link>
    </div>
  );
}

export default Home;
