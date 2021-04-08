import React from "react";

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
        {this.state.pepitoCompanyName.map(api => <p>{pepito_company_name}</p>)}
        {/*{this.state.pepitoCompanyName.map(function(baba) {
          return (
            <p>
              {baba}
            </p>
          )
        })}*/}
        <button onClick={this.fetchPepito}>Fetch</button>
      </div>
    )
    
  }

  fetchPepito = () => {
    fetch('http://localhost:8000/paradise_search/public/index.php/api').then(response => response.json()).then(response => {
      console.log(response.pepito_company_name);
      this.setState({
        pepitoCompanyName: response.pepito_company_name
      })
    })
  }
}