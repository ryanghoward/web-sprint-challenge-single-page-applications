import React from "react";
import pizza from "../Assets/Pizza.jpg";

function Home() {
  return (
    <div className='home-wrapper'>
      <nav>
        <img className='home-image' src={pizza} alt='Pizza' />
      </nav>
    </div>
  );
}

export default Home;
