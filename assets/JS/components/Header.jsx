import React from 'react';
import '/assets/styles/app.css';
import logo from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand.svg"

export default class Header extends React.Component {
  render() {
    return (
      <html>
        <header className="Header bg-primary py-5 mb-5">
          <a href="HomeSelect"><img className="logoheader" src={logo}/></a>
        </header>
      </html>
    )
  }
}