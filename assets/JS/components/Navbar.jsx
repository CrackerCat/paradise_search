import React from 'react';
import {NavLink} from "react-router-dom";
import '/assets/styles/app.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <html>
        <div className="Navbar">

          <div className="Navbar__title">
            <a className="aNavbar" href="">PARADISE SEARCH</a>
          </div>
          <div className="Navbar__content">
            <a className="aNavbar" href="">À propos</a>
            <a className="aNavbar" href="">Conditions d'utilisation</a>
            <a className="aNavbar" href="">Contact</a>
          </div>
              {/*<a class="navbar-brand" href="#">PARADISE</a>*/}
            {/*<button name="button">*/}
              {/*<NavLink to="/HomeSelect" activeClassName="Navbar__link--active">HomeSelect</NavLink>*/}
            {/*</button>*/}

            {/*<button name="button">*/}
              {/*<NavLink to="/Results" activeClassName="Navbar__link--active">Results</NavLink>*/}
            {/*</button>*/}
            
            {/*<button name="button">*/}
              {/*<NavLink to="/HomeBrands" activeClassName="Navbar__link--active">HomeBrands</NavLink>*/}
            {/*</button>*/}
            
            {/*<button name="button">*/}
              {/*<NavLink to="/TermsOfUse" activeClassName="Navbar__link--active">TermsOfUse</NavLink>*/}
            {/*</button>*/}

            {/*<button name="button">*/}
            {/*<NavLink to="/About" activeClassName="Navbar__link--active">About</NavLink>*/}
            {/*</button>*/}
            
          </div>
        </html>
    )
  }
}