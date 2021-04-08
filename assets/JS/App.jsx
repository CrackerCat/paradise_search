import React from "react";
import {hostname} from "./jsenv"

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      pepitoCompanyName:[
      //'pepito_company_name',
      //'pepito_company_country',
      //'pepito_company_subs',
      //'pepito_company_subs_count',
      //'pepito_company_creation'
      ]
    }
console.log(this.state);
    
  }

  render() {
    return (
      <div>
        <p>{this.state.pepitoCompanyName}</p>
        <p>{this.state.pepitoCompanyCountry}</p>
        <p>{this.state.pepitoCompanySubsNames}</p>
        {/* {this.state.pepitoCompanySubsNames.map(filliale => <p>{filliale}</p>)} */}
        <button onClick={this.fetchPepito}>Fetch</button>
      </div>
    )
    
  }

  fetchPepito = () => {
    fetch(`http://localhost/${hostname}/paradise_search/public/index.php/api`).then(response => response.json()).then(response => {
      console.log(response);
      this.setState({
        pepitoCompanyName: response.pepito_company_name,
        pepitoCompanyCountry:response.pepito_company_country ,
        pepitoCompanySubsNames: response.pepito_company_subs,
        pepitoCompanySubsCount: response.pepito_company_subs_count,
        pepitoCompanyCreation:response.pepito_company_creation,
        
      })
    })
  }
}