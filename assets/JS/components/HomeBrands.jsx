import React from 'react';
import logo_lu from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Lu.svg";
import logo_milka from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Milka.svg";
import logo_pepito from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Pepito.svg";
import logo_stmichel from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Stmichel.svg";
import logo_nestle from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Nestle.svg";
import logo_mondelez from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Mondelez.svg";
import logo_kitkat from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-KitKat.svg";
import logo_knorr from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Knorr.svg";

export default class HomeBrands extends React.Component {
    render() {
        return (
            <>
                <body className="container">
                
                    <div className="results">
                        <div className="row titreHome">
                            <div className="col-md-12 mb-12">
                                <h5>Sélectionnez la marque de votre choix.</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img className="imgMarie" src={logo_lu}/>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img className="imgMarie" src={logo_milka}/>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <a href="Results"><img className="imgMarie" src={logo_pepito}/></a>
                                    </div>
                                </div>
                            </div>
                                    
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img className="imgMarie" src={logo_stmichel}/> 
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img src={logo_kitkat}/> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img src={logo_knorr}/> 
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