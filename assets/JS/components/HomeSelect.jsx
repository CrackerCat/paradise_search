import React from 'react';
import '/assets/styles/app.css';
import icon_glass from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Glass.svg";
import icon_ombrella from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Ombrella.svg";
import icon_energy from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Energy.svg";
import icon_rocket from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Rocket.svg";
import icon_sport from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Sport.svg";
import icon_home from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Home.svg";

export default class HomeSelect extends React.Component {
  render() {
    return (
    <>
        <div className="results">
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={icon_glass} alt="agro-alimentaire"/> 
                            <div className="card-footer">
                                <input type="reset" value="Boissons" />
                                <input type="reset" value="Epicerie" />
                                <input type="reset" value="Produits laitiers" />
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={icon_ombrella} alt="mode"/>
                            <div className="card-footer">
                                <input type="reset" value="Habits" />
                                <input type="reset" value="Chaussures" />
                                <input type="reset" value="Accessoires" />
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={icon_energy} alt="beauté et produits d'entretien"/> 
                            <div className="card-footer">
                                <input type="reset" value="Entretien" />
                                <input type="reset" value="Cosmétique" />
                                <input type="reset" value="Douche" />
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={icon_rocket} alt="Transports"/> 
                            <div className="card-footer">
                                <input type="reset" value="Voitures" />
                                <input type="reset" value="Trotinettes" />
                                <input type="reset" value="Vélos" />
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={icon_sport} alt="loisirs"/> 
                            <div className="card-footer">
                                <input type="reset" value="Jouets" />
                                <input type="reset" value="Jeux vidéos" />
                                <input type="reset" value="Jeux de société" />
                            </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={icon_home} alt="bébé"/>
                            <div className="card-footer">
                                <input type="reset" value="Couches" />
                                <input type="reset" value="Nourriture" />
                                <input type="reset" value="Accessoires" />
                            </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>

    )
  }
}
