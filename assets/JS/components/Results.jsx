import React from "react";
import { hostname } from "../jsenv"
//import img from "../../../src/img/united-states.jpg"
import '/assets/styles/app.css';
import GraphCA from "./GraphCA";
import Map from "./Map";

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
        
        <div>
            <div>
                <ul>

                    <ol></ol>
                    <ol><h2>{this.state.MondelezName}</h2></ol>
                    <ol></ol>
                    <ol><h4>Pays du siège : Etats-Unis</h4></ol>
                </ul>
            </div>
                    
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Chiffre d'affaire (M€) :</h4>
                            <GraphCA/>
                            <p className="card-text"></p>
                        </div>
                        <div className="card-footer">
                        {/*<a href="#" className="btn btn-primary">Lien vers Graphique</a>*/}
                    </div>
                </div>
            </div>
                        
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Date de création :</h4>
                                <p className="card-text">20-12-2020</p>    
                        </div>
                        <div className="card-footer">
                            {/*<a href="#" className="btn btn-primary">Lien vers la carte</a>*/}
                        </div>
                    </div>
                </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    
                    <div className="card-body">
                        <h4 className="card-title">Siège</h4>
                        <Map/>
                    </div>
                </div>
            </div>
                        
            <div className="col-md-5 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <h4 className="card-title">Les filiales dans les paradis fiscaux :</h4>
                                
                            {/* <p>{this.state.MondelezSubsNames}</p> */}
                            {/* <p>{subnames}</p> */}
                            {this.state.MondelezSubsNames.map(filliale => (<>
                        <ul>
                            <li>
                                <p>{filliale.statement.properties.subsidiary.name} ({filliale.statement.properties.subsidiary.jurisdiction})</p>
                            </li>
                        </ul>
                        </>))}          
                    </div>
                </div>
            </div>
            <div className="col-md-5 mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <h4 className="card-title">Sanction prononcées envers l'entreprise :</h4>
                        <p className="card-text">AUCUNE</p>  
                    </div>
                </div>
            </div>
                        
            </div>
        </div>
        
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
                })
            })
        }
    };
