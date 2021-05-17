import React from 'react';
import logo_lu from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Lu.png";
//import logo_milka from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Milka.svg";
import logo_pepito from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Pepito.svg";
//import logo_stmichel from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Stmichel.svg";
//import logo_kitkat from "/Applications/MAMP/htdocs/paradise_search/src/img/KitKat_logo(1).svg";
//import logo_knorr from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Knorr-1.svg";
import logo_oreo from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Oreo.svg";
import logo_prince from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Prince.png";
import logo_milka from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Milka.svg";
import logo_toblerone from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Toblerone.png";
import logo_daim from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Daim.png";
import logo_cotedor from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Cotedor.png";
import logo_hollywood from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Hollywood.png";
import logo_vosgienne from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Vosgienne.png";
import logo_stimorol from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Stimorol.png";
import logo_belin from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Belin.png";
import logo_tuc from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Tuc.png";
import logo_brun from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Brun.png";
import logo_cachou from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_epicerie/Brand-Cachou.png";

export default class BrandsEpicerie extends React.Component {
    render() {
        return (
            <>
                <body className="container">
                
                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 p-0 mb-4">
                                <h5>Epicerie : Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>
                        <div className="row p-4">
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-bottom">
                                        <a href="Mondelez"><img className="imgBrandLu" src={logo_lu}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-bottom">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_prince}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-bottom">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_pepito}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_milka}/></a> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom border-left">
                                        <a href="Mondelez"><img className="imgBrandLine" src={logo_toblerone}/></a> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_oreo}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="Mondelez"><img className="imgBrandStimorol" src={logo_stimorol}/></a> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom border-left">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_belin}/></a> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_vosgienne}/></a> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-bottom">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_daim}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-top border-bottom">
                                        <a href="Mondelez"><img className="imgBrandHollywood" src={logo_hollywood}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top border-bottom">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_cotedor}/></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top">
                                        <a href="Mondelez"><img className="imgBrandBrun" src={logo_brun}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-top">
                                        <a href="Mondelez"><img className="imgBrandTuc" src={logo_tuc}/></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top">
                                        <a href="Mondelez"><img className="imgBrand" src={logo_cachou}/></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </body>
            </>
        )
    }
}