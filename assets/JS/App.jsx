import React from "react";
import Disclaimer from "./components/Disclaimer"
import HomeSelect from "./components/HomeSelect"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ResultsMondelez from "./components/ResultsMondelez"
import ResultsProcterGamble from "./components/ResultsProcterGamble"
import BrandsEpicerie from "./components/BrandsEpicerie"
import BrandsEntretien from "./components/BrandsEntretien"
import BrandsDouche from "./components/BrandsDouche"
import BrandsCosmetique from "./components/BrandsCosmetique"
import BrandsBebe from "./components/BrandsBebe"
import TermsOfUse from "./components/TermsOfUse"
import About from "./components/About"
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import Navbar from "./components/Navbar";
import '/assets/styles/app.css';



export default class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <h2>Ma super app</h2> */}
          <Navbar/>
          {<Header/>}
          <Switch>
            <Route path='/HomeSelect' exact>
              <HomeSelect/>
            </Route>
            <Route path='/BrandsEpicerie'>
              <BrandsEpicerie/>
            </Route>
            <Route path='/BrandsEntretien'>
              <BrandsEntretien/>
            </Route>
            <Route path='/BrandsDouche'>
              <BrandsDouche/>
            </Route>
            <Route path='/BrandsCosmetique'>
              <BrandsCosmetique/>
            </Route>
            <Route path='/Brandsbebe'>
              <BrandsBebe/>
            </Route>
            <Route path='/About'>
              <About/>
            </Route>
            <Route path='/TermsOfUse'>
              <TermsOfUse/>
            </Route>
            <Route path='/Mondelez'>
              <ResultsMondelez/>
            </Route>
            <Route path='/ProcterGamble'>
              <ResultsProcterGamble/>
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