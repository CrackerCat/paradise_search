import React from 'react';
import '/assets/styles/app.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-4 FooterOne">
              <p className="m-0 text-left text-white">PARADISE SEARCH</p>
              <p className="m-0 text-left text-white">@ PARADISE SEARCH 2021</p>
            </div>
            <div class="col-md-4 mb-4 FooterTwo">
              <p className="m-0 text-left text-white">Blog</p>
              <p className="m-0 text-left text-white">Contribution</p>
              <p className="m-0 text-left text-white">Contact</p>
            </div>
            <div class="col-md-4 mb-4 FooterThree">
              <label className="m-0 text-left text-white" id="entreprise">Vous souhaitez nous soumettre une entreprise à référencer ?</label>
              
                <input className="m-0 text-left text-white full-width" type="soumettre" id="entreprise" 
                placeholder="Company Name" ></input>
                {/*<button className="m-0 text-left text-white" type="submit" href="">Envoyer</button>*/}
          
              
            </div>
          </div>
        </div>
        {/*<p className="m-0 text-left text-white">&copy; PARADISE</p><br></br>
        <p className="m-0 text-left text-white">&copy; PARADISE-SEARCH 2021</p>
          
        <p className="m-0 text-right text-white">Blog</p>
        <p className="m-0 text-right text-white">Contribution</p>
        <p className="m-0 text-right text-white">Contact</p>
          
          
        <p className="m-0 text-center text-white">Vous souhaitez nous soumettre</p>
        <p className="m-0 text-center text-white">une entreprise à référencer ?</p>
        <input className="m-0 text-center text-white" type="soumettre" id="entreprise" 
          placeholder="Enterprise Name" ></input>
        <button className="m-0 text-center text-white" type="submit" href="">Submit</button>*/}
  
      </footer>    
    )
  }
}