import React from 'react';
import logo_lu from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Lu.svg";
import logo_milka from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Milka.svg";
import logo_pepito from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Pepito.svg";
import logo_stmichel from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Stmichel.svg";
import logo_nestle from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Nestle.svg";
import logo_mondelez from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Mondelez.svg";

export default class HomeBrands extends React.Component {
    render() {
        return (
            <>
                <div className="results">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={logo_lu}/>
                                </div>
                            </div>
                        </div>
                                
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={logo_milka}/>
                                </div>
                            </div>
                        </div>
                                
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <a href="Results"><img src={logo_pepito}/></a>
                                </div>
                            </div>
                        </div>
                                
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={logo_stmichel}/> 
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={logo_nestle}/> 
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img src={logo_mondelez}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}