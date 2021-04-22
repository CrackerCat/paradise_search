import React from 'react';
import logo_lu from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Lu.svg";
import logo_milka from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Milka.svg";
import logo_pepito from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Pepito.svg";
import logo_stmichel from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Stmichel.svg";
import logo_kitkat from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-KitKat.svg";
import logo_knorr from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Knorr-1.svg";

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
                                        <img className="imgMarie" src={logo_lu}/>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-left border-bottom">
                                        <img className="imgMarie" src={logo_milka}/>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-bottom">
                                        <a href="Results"><img className="imgMarie" src={logo_pepito}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top">
                                        <img className="imgMarie" src={logo_stmichel}/> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-right border-top border-left">
                                        <img className="imgModif" src={logo_kitkat}/> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top">
                                        <img className="imgModif" src={logo_knorr}/> 
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