import React from "react";
import "./styles.css";
import { Link as Anchor } from "react-router-dom";

function Header() {
  return (
 <div className="container">
    <header className="header">

    <h1 className="logo">Aeropuertos Argentina 2000</h1>
    <div className="nav-and-button">
        <nav className="navigation">
          
           <a><Anchor to="" className="nav-link">Home</Anchor></a>
          
        
        </nav>
        <button className="login-button">Login</button>
    </div>
</header>
</div>

  );
}
export default Header;