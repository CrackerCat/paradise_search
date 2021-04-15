import React from 'react';
import {NavLink} from "react-router-dom";
import '/assets/styles/app.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink to="/About" activeClassName="Navbar__link--active">About</NavLink>
        <NavLink to="/Results" activeClassName="Navbar__link--active">Results</NavLink>
        <NavLink to="/TermsOfUse" activeClassName="Navbar__link--active">TermsOfUse</NavLink>
      </div>
    )
  }
}