import React from 'react';
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink to="/" activeClassName="Navbar__link--active" exact>Home</NavLink>
        <NavLink to="/Disclaimer" activeClassName="Navbar__link--active">Disclaimer</NavLink>
        <NavLink to="/Results" activeClassName="Navbar__link--active">Results</NavLink>
      </div>
    )
  }
}