import React from 'react';
import '/assets/styles/app.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className="bg-primary py-5 mb-5">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-lg-12">
                    <h1 className="display-4 text-white mt-5 mb-2">PARADISE SEARCH</h1>
                    <p className="lead mb-5 text-white-50">Un paradis fiscal est un pays ou territoire à fiscalité réduite ou nulle, c'est-à-dire où le taux d'imposition est jugé très bas en comparaison avec les niveaux d'imposition existant dans les pays de l'OCDE.</p>
                </div>
            </div>
        </div>
    </header>
    )
  }
}