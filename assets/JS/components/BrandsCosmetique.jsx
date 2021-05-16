import React from 'react';
import logo_braun from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_cosmetique/Brand-Braun-PG.svg";
import logo_fluocaril from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_cosmetique/Brand-Fluocaril-PG.svg";
import logo_gillette from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_cosmetique/Brand-Gillette-PG.svg";
import logo_oralb from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_cosmetique/Brand-OralB-PG.svg";
import logo_always from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_cosmetique/Brand-Always-PG.png"
import logo_tampax from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_cosmetique/Brand-Tampax-PG.svg"
import logo_vicks from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_cosmetique/Brand-Vicks-PG.svg"

export default class BrandsCosmetique extends React.Component {
    render() {
        return (
            <>
                <body className="container">

                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 p-0 mb-4">
                                <h5>Cosmétique : Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>

                        <div className="row p-4">
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_braun}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_fluocaril}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-bottom">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_gillette}/></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-bottom border-right border-top">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_oralb}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-bottom border-right border-top border-left">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_always}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-left border-bottom border-top">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_tampax}/></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top">
                                        <a href="ResultsProcterGamble"><img className="imgBrand" src={logo_vicks}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-top">
                                        {/*<a href="ResultsProcterGamble"><img className="imgBrandHollywood" src={logo_hollywood}/></a>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top ">
                                        {/*<a href="ResultsProcterGamble"><img className="imgBrand" src={logo_cotedor}/></a>*/}
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