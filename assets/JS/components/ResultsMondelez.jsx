import React from "react";
import '/assets/styles/app.css';
import GraphCAMondelez from "./GraphCAMondelez";
import Map from "./Map";
import AgendaMondelez from "./AgendaMondelez";
import logo_mondelez from "/Applications/MAMP/htdocs/paradise_search/src/img/Brand-Mondelez.svg";
import icon_chart from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Chart.svg";
import icon_world_y from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-World-Y.svg";
import icon_alert_g from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Alert-G.svg";

export default class ResultsMondelez extends React.Component {

    constructor() {
        super();

        this.state = {
            MondelezName: [],
            MondelezSubsNames: [],
            MondelezSubs: [],
        }
    }

    render() {

        //In case number of subsidiaries has to be defined and put in a const : 
        //const MondelezSubsLength = this.state.MondelezSubs.length;
        
        //Alternative to super() and this.state call above :
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
                                        {/*Following presentation text from Wikipedia : https://fr.wikipedia.org/wiki/Mondel%C4%93z_International*/}
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
                                    <h4 className="card-title">Chiffre d'affaires 2020</h4>
                                    <h4 className="card-title">21 661 (M€)</h4>
                                </div>
                            </div>
                        </div>
                                
                        <div className="col-md-4 p-0">
                            <div className="card h-100 border-0">
                                <div className="card-body border-dark border-right border-left border-bottom">
                                    <GraphCAMondelez/>
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
                        <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-top ">
                                        <img src={icon_world_y} alt="paradis fiscaux"/>
                                        <h4 className="card-title">Filiales | paradis fiscal</h4>
                                        <h2 className="card-text">{34}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body filiales border-dark border-right border-top ">
                                    
                                        {/*Showing the list of subsidiaries in tax havens with pagination*/}
                                        <AgendaMondelez/>
                                    
                                        {/*Alternative way to display data without pagination*/}
                                        {/*{this.state.MondelezSubs.map(subs => (<>
                                                <ul>
                                                    <li>
                                                        <p>{subs.subsname} : {subs.subscountry}</p>
                                                    </li>
                                                </ul>
                                            </>))}*/}

                                        {/*Alternative way to display data if data comes unfiltered from API*/}
                                        {/*{this.state.MondelezSubsNames.map(filliale => (<>
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
                                            </>))}*/}
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-0">
                                <div className="card h-100 border-0">
                                    <div className="card-body border-dark border-left border-top ">
                                        <img src={icon_alert_g} alt="sanctions"/>
                                        {/*To find out wether sanctions have been imposed on the company's subsidiaries, we reconciled the list 
                                        of subsidiaries with the following OCCRPS's sanctions databases via OpenRefine:
                                        FinCEN Enforcement Actions, World Bank Debarred Companies List, European External Action Service Sanctions,
                                        HM Treasury Sanctions List, Sanctions imposed by Canada, Australian Foreign Sanctions, 
                                        Kyrgyz FIU Sanctions List, United Nations Security Council Sanctions, Swiss SECO Sanctions
                                        and Ukraine Sanctions.*/}
                                        <h4 className="card-title">Sanctions</h4>
                                        <p className="card-text">AUCUNE</p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </body>
        )}

    //Call the two fetch functions in order to get the data of our API (via /api) and our database (via mondelez/subs)
    componentDidMount() {
        this.fetchMondelez();
        this.fetchMondelezSubs();
    }
    
    //Fetch the data brought to /api through our APIController
    fetchMondelez = () => {
        fetch(`http://localhost:8000/api`).then(response => response.json()).then(response => {
            //to check wether the data is properly fetched :
            //console.log(response);
            this.setState({
                MondelezName: response.Mondelez_name,
                MondelezCountry: response.Mondelez_country,
                //MondelezSubsNames: response.Mondelez_subs_names,
                //MondelezSubsCount: response.Mondelez_subs_count,
                MondelezCreation: response.Mondelez_creation,
                MondelezResultatSanctions: response.Mondelez_sanction,
                //MondelezSubs: response.Mondelez_subs,
            })
        });
    }

    //fetch the data brought to /mondelez/subs from our PHPMyAdmin database
    fetchMondelezSubs = () => {
        fetch(`http://localhost:8000/mondelez/subs`).then(response => response.json()).then(response => {
            //to check wether the data is properly fetched :
            //console.log(response);
            this.setState({
                MondelezSubs: response.Mondelez_subs,
            })
        });
    }
};

