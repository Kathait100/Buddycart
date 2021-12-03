import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
    <div id ="Navbar">
      <h2><span id ="buddy">Buddy</span><span id = "cart">Cart</span>.in</h2>
        <nav>
          <ul>
            <li>Home</li>
            <li>My Buddies</li>
            <li>Explore</li>
            <li id = "default">Login</li>
          </ul>
        </nav>
    </div>
    )
}

export default Navbar
