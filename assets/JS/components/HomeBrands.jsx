import React from 'react';
import logo_lu from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_color/Brand-Lu.png";
//import logo_milka from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Milka.svg";
import logo_pepito from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_color/Brand-Pepito.svg";
import logo_stmichel from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Stmichel.svg";
import logo_kitkat from "/Applications/MAMP/htdocs/paradise_search/src/img/KitKat_logo(1).svg";
//import logo_knorr from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Knorr-1.svg";
import logo_oreo from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_color/Brand-Oreo.svg";
import logo_prince from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_color/prince-choco-logo-png-transparent.png";
import logo_milka from "/Applications/MAMP/htdocs/paradise_search/src/img/brands_color/Brand-Milka.svg";

export default class HomeBrands extends React.Component {
    render() {
        return (
            <>
                <body className="container">
                
                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 p-0 mb-4">
                                <h5>Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>
                        <div className="row p-4">
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-bottom">
                                        <img className="imgBrand" src={logo_lu}/>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-bottom">
                                        <img className="imgBrand" src={logo_prince}/>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-bottom">
                                        <a href="Results"><img className="imgBrand" src={logo_pepito}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top">
                                        <img className="imgBrand" src={logo_milka}/> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-left">
                                        <img className="imgBrand" src={logo_kitkat}/> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top">
                                        <img className="imgBrand" src={logo_oreo}/> 
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