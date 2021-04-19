import React from 'react';
import '/assets/styles/app.css';
import icon_glass from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Glass.svg";
import icon_dress from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Dress.svg";
import icon_energy from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Energy.svg";
import icon_rocket from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Rocket.svg";
import icon_sport from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Sport.svg";
import icon_strawler from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Strawler.svg";
import icon_clean from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Clean.svg";

export default class HomeSelect extends React.Component {
  render() {
    return (
    <>
        <body className="container">
            <div className="row titreHome">
                <div className="col-md-12 mb-12 g-0">
                    <h5>Sélectionnez le secteur, puis la marque de votre choix.</h5>
                </div>
            </div>
            <div className="results">
                <div className="row">
                    <div className="col-md-4 mb-4 g-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <img className="imgHomeSelect" src={icon_glass} alt="agro-alimentaire"/> 
                                <h5 className="CatHomeSelect">Agro-alimentaire</h5>
                                    <div className="card-footer">
                                        <input className="InputHomeSelect" type="reset" value="Boissons" />
                                        <a href="HomeBrands"><input className="InputHomeSelect" type="reset" value="Epicerie" /></a>
                                        <input className="InputHomeSelect" type="reset" value="Produits laitiers" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 g-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <img className="imgHomeSelect" src={icon_dress} alt="mode"/>
                                <h5 className="CatHomeSelect">Mode</h5>
                                    <div className="card-footer">
                                        <input className="InputHomeSelect" type="reset" value="Habits" />
                                        <input className="InputHomeSelect" type="reset" value="Chaussures" />
                                        <input className="InputHomeSelect" type="reset" value="Accessoires" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 g-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <img className="imgHomeSelect" src={icon_clean} alt="beauté et produits d'entretien"/>
                                <h5 className="CatHomeSelect">Beauté et entretien</h5> 
                                    <div className="card-footer">
                                        <input className="InputHomeSelect" type="reset" value="Entretien"/>
                                        <input className="InputHomeSelect" type="reset" value="Cosmétique"/>
                                        <input className="InputHomeSelect" type="reset" value="Douche"/>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 g-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <img className="imgHomeSelect" src={icon_rocket} alt="Transports"/> 
                                <h5 className="CatHomeSelect">Transports</h5>
                                    <div className="card-footer">
                                        <input className="InputHomeSelect" type="reset" value="Voitures" />
                                        <input className="InputHomeSelect" type="reset" value="Trotinettes" />
                                        <input className="InputHomeSelect" type="reset" value="Vélos" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 g-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <img className="imgHomeSelect" src={icon_sport} alt="loisirs"/> 
                                <h5 className="CatHomeSelect">Loisirs</h5>
                                    <div className="card-footer">
                                        <input className="InputHomeSelect" type="reset" value="Jouets" />
                                        <input className="InputHomeSelect" type="reset" value="Jeux vidéos" />
                                        <input className="InputHomeSelect" type="reset" value="Jeux de société" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 g-0">
                        <div className="card h-100">
                            <div className="card-body">
                                <img className="imgHomeSelect" src={icon_strawler} alt="bébé"/>
                                <h5 className="CatHomeSelect">Bébé</h5>
                                    <div className="card-footer">
                                        <input className="InputHomeSelect" type="reset" value="Couches" />
                                        <input className="InputHomeSelect" type="reset" value="Nourriture" />
                                        <input className="InputHomeSelect" type="reset" value="Accessoires" />
                                    </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </>

    )
  }
}
