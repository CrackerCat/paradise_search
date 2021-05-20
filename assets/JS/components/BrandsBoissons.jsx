import React from 'react';
import logo_7up from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_boissons/Brand-7Up-PC.svg";
import logo_lipton from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_boissons/Brand-Lipton-PC.svg";
import logo_pepsi from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_boissons/Brand-Pepsi-PC.svg";
import logo_tropicana from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_boissons/Brand-Tropicana-PC.svg";
import logo_pepsimax from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_boissons/Brand-PepsiMax-PC.svg";

export default class BrandsBoissons extends React.Component {
    render() {
        return (
            <>
                <body className="container">

                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 p-0 mb-4">
                                <h5>Boissons : Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>

                        <div className="row p-4">
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-bottom">
                                        <a href="PepsiCo"><img className="imgBrand" src={logo_7up}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-bottom">
                                        <a href="PepsiCo"><img className="imgBrand" src={logo_lipton}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-bottom">
                                        <a href="PepsiCo"><img className="imgBrand" src={logo_pepsi}/></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top">
                                        <a href="PepsiCo"><img className="imgBrand" src={logo_tropicana}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-top">
                                        <a href="PepsiCo"><img className="imgBrand" src={logo_pepsimax}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top">
                                        {/*<a href="PepsiCo"><img className="imgBrand" src={logo_cotedor}/></a>*/}
                                    </div>
                                </div>
                            </div>

                            {/*Additional row, to be duplicated in case more brands are integrated 
                            + add className "border-bottom" to row above":*/}

                            {/*<div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="PepsiCo"><img className="imgBrand" src={logo_daim}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-top border-bottom">
                                        <a href="PepsiCo"><img className="imgBrandHollywood" src={logo_hollywood}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="PepsiCo"><img className="imgBrand" src={logo_cotedor}/></a>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </body>
            </>
        )
    }
}