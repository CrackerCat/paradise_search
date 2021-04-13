import React from "react";
import { hostname } from "../jsenv"
import img from "../../../src/img/united-states.jpg"


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
                <h1>L'entreprise derrière Pépito</h1>
                <h3>Nom d'entreprise-mère :</h3>
                <p>{this.state.MondelezName}</p>
                <h1>Pays du siège : </h1>
                <p>{this.state.MondelezCountry}</p>
                <h2> chiffre d'affaire (million)</h2><br/>
                    2020 € 21.661,654 <br/>
                    2019 € 23.026,53 <br/>
                    2018 € 22.653,264<br/>
                    <img src={img} alt="carte états-unis"/>
                {/* <p>{this.state.MondelezSubsNames}</p> */}
                {/* <p>{subnames}</p> */}
                {this.state.MondelezSubsNames.map(filliale => (<>
                <ul>
                    <li>
                        <p>{filliale.statement.properties.subsidiary.name}</p>
                        <p>{filliale.statement.properties.subsidiary.country}</p>
                    </li>
                </ul>
                </>))}
                
            </div>
        )

    }

    componentDidMount() {
        this.fetchMondelez()
    }
        
      fetchMondelez = () => {
              fetch(`http://localhost/${hostname}/paradise_search/public/index.php/api`).then(response => response.json()).then(response => {
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
