import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


class Header extends Component{
  render(){
  return (
    <div className="header">
      <Link to="/dashboard">
          <div className="header__option">
        <h2>UserName</h2>
        </div>
      </Link>
      <nav className="menu">
		<ul className="rmenu">
      <li><Link className="menu-item" to="/show"> Show</Link></li>
      <li><Link className="menu-item" to="/find"> Find</Link></li>
      <li><a className="menu-item" href="http://localhost:5000"> Contact Us</a></li>
			<li><Link className="menu-reg" to="/"> Log Out</Link></li>
			
		</ul>
	</nav>
      
      
      
    </div>
  );
}
}
export default Header;