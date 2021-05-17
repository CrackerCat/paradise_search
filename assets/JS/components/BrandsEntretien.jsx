import React from 'react';
import logo_ambipur from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_entretien/Brand-Ambi-pur.svg";
import logo_ariel from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_entretien/Brand-Ariel.svg";
import logo_bonux from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_entretien/Brand-Bonux.svg";
import logo_febreze from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_entretien/Brand-Febreze.svg";
import logo_lenor from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_entretien/Brand-Lenor.svg";
import logo_mrpropre from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_entretien/Brand-MrPropre.svg";
import logo_swiffer from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_entretien/Brand-Swiffer.svg";

export default class BrandsEntretien extends React.Component {
    render() {
        return (
            <>
                <body className="container">

                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 p-0 mb-4">
                                <h5>Entretien : Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>

                        <div className="row p-4">
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrand" src={logo_ambipur}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrand" src={logo_ariel}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrand" src={logo_bonux}/></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrand" src={logo_febreze}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom border-left">
                                        <a href="ProcterGamble"><img className="imgBrandLine" src={logo_lenor}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrand" src={logo_mrpropre}/></a> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top">
                                        <a href="ProcterGamble"><img className="imgBrandStimorol" src={logo_swiffer}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-left">
                                        {/*<a href="ProcterGamble"><img className="imgBrand" src={logo_belin}/></a> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top">
                                        {/*<a href="ProcterGamble"><img className="imgBrand" src={logo_vosgienne}/></a> */}
                                    </div>
                                </div>
                            </div>

                            {/*Additional row, to be duplicated in case more brands are integrated 
                            + add className "border-bottom" to row above":*/}

                            {/*<div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrand" src={logo_daim}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-top border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrandHollywood" src={logo_hollywood}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="ProcterGamble"><img className="imgBrand" src={logo_cotedor}/></a>
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