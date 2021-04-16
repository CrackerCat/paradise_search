import React from 'react';
import {NavLink} from "react-router-dom";
import '/assets/styles/app.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
          <button name="button">
          <NavLink to="/About" activeClassName="Navbar__link--active">About</NavLink>
          </button>
           <button name="button">
         <NavLink to="/Results" activeClassName="Navbar__link--active">Results</NavLink>
          </button>

          <button name="button">
          <NavLink to="/TermsOfUse" activeClassName="Navbar__link--active">TermsOfUse</NavLink>
          </button>

          <button name="button">
          <NavLink to="/HomeBrands" activeClassName="Navbar__link--active">HomeBrands</NavLink>
          </button>
          <button name="button">
          <NavLink to="/HomeSelect" activeClassName="Navbar__link--active">HomeSelect</NavLink>
          </button>
        </div>
    )
  }
}