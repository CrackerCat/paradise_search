import React from "react";
import Disclaimer from "./components/Disclaimer"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Results from "./components/Results";
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import Navbar from "./components/Navbar";


export default class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <h2>Ma super app</h2> */}
          {<Header/>}
          <Navbar/>
          <Switch>
            <Route path='/Home' exact>
              <Home/>
            </Route>
            <Route path='/Disclaimer'>
              <Disclaimer/>
            </Route>
            <Route path='/Results'>
              <Results/>
            </Route>
          </Switch>
          {<Footer/>}
        </div>
      </BrowserRouter>
    )
  }
}



//   constructor() {
//     super();
//     this.state = {
//       MondelezName:[
//       //'Mondelez_name',
//       //'Mondelez_country',
//       //'Mondelez_subs',
//       //'Mondelez_subs_count',
//       //'Mondelez_creation'
//       ],
//       MondelezSubsNames:[],
//     }
// console.log(this.state);
    
//   }

//   render() {

//     // let subnames = null ;
//     // if(this.state.MondelezSubsNames)
//     // {
//     //   subnames = this.state.MondelezSubsNames.map(filliale => (<div>
//     //     <p>{filliale.statement.properties.subsidiary.name}</p>
//     //     <p>{filliale.statement.properties.subsidiary.country}</p>
//     //     </div>))
//     // }
  

//     return (
//       <div>
//         <p>{this.state.MondelezName}</p>
//         <p>{this.state.MondelezCountry}</p>
//         {/* <p>{this.state.MondelezSubsNames}</p> */}
//         {/* <p>{subnames}</p> */}
//         {this.state.MondelezSubsNames.map(filliale => (<>
//         <p>{filliale.statement.properties.subsidiary.name}</p>
//         <p>{filliale.statement.properties.subsidiary.country}</p>
//         </>))}
//         <button onClick={this.fetchMondelez}>Fetch</button>
//       </div>
//     )
    
//   }

//   fetchMondelez = () => {
//     fetch(`http://localhost/${hostname}/paradise_search/public/index.php/api`).then(response => response.json()).then(response => {
//       console.log(response);
//       this.setState({
//         MondelezName: response.Mondelez_name,
//         MondelezCountry: response.Mondelez_country ,
//         MondelezSubsNames: response.Mondelez_subs,
//         MondelezSubsCount: response.Mondelez_subs_count,
//         MondelezCreation: response.Mondelez_creation,
//       })
//     })
//   }
// }