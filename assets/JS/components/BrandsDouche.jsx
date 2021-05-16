import React from 'react';
import logo_headshoulders from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_douche/Brand-HeadShoulders.svg";
import logo_pantene from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_douche/Brand-Pantene.svg";

export default class BrandsDouche extends React.Component {
    render() {
        return (
            <>
                <body className="container">

                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 p-0 mb-4">
                                <h5>Douche : Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>

                        <div className="row p-4">
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_headshoulders}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_pantene}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left">
                                        {/*<a href="ResultsProcterGamble"><img className="imgBrand" src={logo_bonux}/></a>*/}
                                    </div>
                                </div>
                            </div>

                            {/*Additional row, to be duplicated in case more brands are integrated 
                            + add className "border-bottom" to row above":*/}

                            {/*<div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_febreze}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom border-left">
                                        <a href="ResultsProcterGamble"><img className="imgBrandLine" src={logo_lenor}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_mrpropre}/></a> 
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