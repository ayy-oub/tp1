import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


class Header extends Component{
  render(){
  return (
    <div className="header">
      <Link to="/">
          <div className="header__option">
        <h2>Home</h2>
        </div>
      </Link>
      <nav className="menu">
		<ul className="rmenu">
			<li><Link className="menu-reg" to="/signup"> Register</Link></li>
			<li><Link className="menu-log" to="/signin"> Login</Link></li>
		</ul>
	</nav>
      
      
      
    </div>
  );
}
}
export default Header;