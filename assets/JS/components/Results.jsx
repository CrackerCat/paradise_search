import React from "react";
import { hostname } from "../jsenv"


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
                <p>{this.state.MondelezName}</p>
                <p>{this.state.MondelezCountry}</p>
                {/* <p>{this.state.MondelezSubsNames}</p> */}
                {/* <p>{subnames}</p> */}
                {this.state.MondelezSubsNames.map(filliale => (<>
                    <p>{filliale.statement.properties.subsidiary.name}</p>
                    <p>{filliale.statement.properties.subsidiary.country}</p>
                    
                    
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
