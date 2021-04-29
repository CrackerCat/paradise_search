import React from "react";
import { hostname } from "../jsenv"
//import img from "../../../src/img/united-states.jpg"
import '/assets/styles/app.css';
import GraphCA from "./GraphCA";
import Map from "./Map";
import logo_mondelez from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Mondelez.svg";
import icon_chart from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Chart.svg";
import icon_world_y from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-World-Y.svg";
import icon_alert_g from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Alert-G.svg";

export default class Results extends React.Component {

    constructor() {
        super();
        this.state = {
            MondelezName: [
                //'Mondelez_name',
                //'Mondelez_country',
                //'Mondelez_subs',
                //'Mondelez_subs_count',
                //'Mondelez_creation'
            ],
            MondelezSubsNames: [],
        }
        // console.log(this.state);

    }

    render() {

        // let subnames = null ;
        // if(this.state.MondelezSubsNames)
        // {
        //   subnames = this.state.MondelezSubsNames.map(filliale => (<div>
        //     <p>{filliale.statement.properties.subsidiary.name}</p>
        //     <p>{filliale.statement.properties.subsidiary.country}</p>
        //     </div>))
        // }

        return (
            <body className="container">
                <div>
                    <div>
                        <div className="row">
                            <div className="col-md-4 p-0">
                                
                                    <div className="card-text">
                                        <img src={logo_mondelez} alt="logo mondelez"/>
                                    </div>
                                
                            </div>
                            <div className="col-md-8 mb-8">
                                
                                    <div className="card-text p-3">
                                        <p>Mondelez International est une multinationale agroalimentaire américaine, particulièrement présente dans les secteurs du biscuit et du chocolat, qui est implantée dans de nombreux pays à travers le monde. Par le volume des ventes, il s'agit du deuxième acteur mondial du secteur agroalimentaire.</p>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 p-0">
                            <div className="card h-100 border-0">
                                <div className="card-body border-dark border-right  border-bottom">
                                    <img  src={icon_chart} alt="chiffre d'affaire"/>
                                    <h4 className="card-title">Chiffre d'affaire</h4>
                                    <h4 className="card-title">21 661 (M€)</h4>
                                </div>
                            </div>
                        </div>
                                
                        <div className="col-md-4 p-0">
                            <div className="card h-100 border-0">
                                <div className="card-body border-dark border-right border-left border-bottom">
                                    <GraphCA/>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 p-0">
                            <div className="card h-100 border-0">
                                <div className="card-body border-dark border-left  border-bottom">
                                    <h4 className="card-title"></h4>
                                    <Map/>
                                </div>
                            </div>
                        </div>
                    <div/>   
                    {/*<div className="row">  */}
                        <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-top ">
                                        <img src={icon_world_y} alt="paradis fiscaux"/>
                                        <h4 className="card-title">Filiales | paradis fiscal</h4>
                                        <h2 className="card-text">9</h2>
                                        {/*<p className="card-text">{this.state.MondelezSubsCount}</p>  */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body filiales border-dark border-right border-top ">
                                            {/* <p>{this.state.MondelezSubsNames}</p> */}
                                            {/* <p>{subnames}</p> */}
                                            {this.state.MondelezSubsNames.map(filliale => (<>
                                                    <ul>
                                                        
                                                        {filliale.statement.properties.subsidiary.jurisdiction =='Switzerland' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Netherlands' ||  
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Bermuda' ||  
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Cayman Islands' || 
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Singapour' || 
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Irland' || 
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Luxemburg' || 
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Curaçao' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Hong Kong' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Cyprus' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Bahamas' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Jersey' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Barbados' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='Mauritius' ||
                                                        filliale.statement.properties.subsidiary.jurisdiction
                                                        =='British Virgin Islands'?
                                                        <li>
                                                            <p>{filliale.statement.properties.subsidiary.name}</p>
                                                            <p>{filliale.statement.properties.subsidiary.jurisdiction}</p>
                                                        </li>
                                                        :""}
                                                    </ul>
                                                </>))}
                                            
                                                {/*<h2>Nombre de filiales parcourues : 100</h2>          */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top ">
                                        <img src={icon_alert_g} alt="sanctions"/>
                                        <h4 className="card-title">Sanctions</h4>
                                        <p className="card-text">AUCUNE</p>  
                                    </div>
                                </div>
                            </div>
                        </div>       
                    {/*</div>*/}
                </div>
            </body>
        
        )}
            
        

    

    componentDidMount() {
        this.fetchMondelez()
    }
        
    fetchMondelez = () => {
        fetch(`http://localhost:8000/api`).then(response => response.json()).then(response => {
                  // console.log(response);
                this.setState({
                    MondelezName: response.Mondelez_name,
                    MondelezCountry: response.Mondelez_country,
                    MondelezSubsNames: response.Mondelez_subs,
                    MondelezSubsCount: response.Mondelez_subs_count,
                    MondelezCreation: response.Mondelez_creation,
                    MondelezResultatSanctions: response.Mondelez_sanction,
                })
            })
        }
    };
