import React from 'react';
import logo_pampers from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_bebe/Brand-Pampers-PG.svg";

export default class BrandsBebe extends React.Component {
    render() {
        return (
            <>
                <body className="container">

                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 p-0 mb-4">
                                <h5>Bébé : Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>

                        <div className="row p-4">
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right">
                                        {/*<a href="ResultsProcterGamble"><img className="imgBrand" src={logo_pampers}/></a>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_pampers}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left">
                                        {/*<a href="ResultsProcterGamble"><img className="imgBrand" src={logo_gillette}/></a>*/}
                                    </div>
                                </div>
                            </div>
                            {/*Additional row, to be duplicated in case more brands are integrated 
                            + add className "border-bottom" to row above":*/}

                            {/*<div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_daim}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-top border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrandHollywood" src={logo_hollywood}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_cotedor}/></a>
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