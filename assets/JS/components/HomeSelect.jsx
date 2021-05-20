import React from 'react';
import '/assets/styles/app.css';
import icon_glass from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Glass.svg";
import icon_dress from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Dress.svg";
//import icon_energy from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Energy.svg";
import icon_rocket from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Rocket.svg";
import icon_sport from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Sport.svg";
import icon_strawler from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Strawler.svg";
import icon_clean from "/Applications/MAMP/htdocs/paradise_search/src/img/Icon-Clean.svg";

export default class HomeSelect extends React.Component {
  render() {
    return (
    <>
        <body class="container overflow-hidden">
            <div class="row titreHome">
                <div class="col-md-12 mb-4">
                    <h5>Sélectionnez le secteur, puis la marque de votre choix.</h5>
                </div>
            </div>
            <div class="results">
                <div class="row p-4">
                    <div class="col-md-4 p-0">
                        <div class="card h-100 border-0">
                            <div class="card-body border-dark border-right border-bottom">
                                <img class="imgHomeSelect" src={icon_glass} alt="agro-alimentaire"/> 
                                <h5 class="CatHomeSelect">Agro-alimentaire</h5>
                                    <div class="card-footer">
                                        <a href="BrandsBoissons"><input class="InputHomeSelect" type="reset" value="Boissons" /></a>
                                        <a href="BrandsEpicerie"><input class="InputHomeSelect" type="reset" value="Epicerie" /></a>
                                        <input class="InputHomeSelect" type="reset" value="Produits laitiers" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 p-0">
                        <div class="card h-100 border-0">
                            <div class="card-body border-dark border-right border-left border-bottom">
                                <img class="imgHomeSelect" src={icon_dress} alt="mode"/>
                                <h5 class="CatHomeSelect">Mode</h5>
                                    <div class="card-footer">
                                        <input class="InputHomeSelect" type="reset" value="Habits" />
                                        <input class="InputHomeSelect" type="reset" value="Chaussures" />
                                        <input class="InputHomeSelect" type="reset" value="Accessoires" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 p-0">
                        <div class="card h-100 border-0">
                            <div class="card-body border-dark border-left border-bottom">
                                <img class="imgHomeSelect" src={icon_clean} alt="beauté et produits d'entretien"/>
                                <h5 class="CatHomeSelect">Beauté et entretien</h5> 
                                    <div class="card-footer">
                                        <a href="BrandsEntretien"><input class="InputHomeSelect" type="reset" value="Entretien"/></a>
                                        <a href="BrandsCosmetique"><input class="InputHomeSelect" type="reset" value="Cosmétique"/></a>
                                        <a href="BrandsDouche"><input class="InputHomeSelect" type="reset" value="Douche"/></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 p-0">
                        <div class="card h-100 border-0">
                            <div class="card-body border-dark border-right border-top">
                                <img class="imgHomeSelect" src={icon_rocket} alt="Transports"/> 
                                <h5 class="CatHomeSelect">Transports</h5>
                                    <div class="card-footer">
                                        <input class="InputHomeSelect" type="reset" value="Voitures" />
                                        <input class="InputHomeSelect" type="reset" value="Trotinettes" />
                                        <input class="InputHomeSelect" type="reset" value="Vélos" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 p-0">
                        <div class="card h-100 border-0">
                            <div class="card-body border-dark border-right border-top border-left">
                                <img class="imgHomeSelect" src={icon_sport} alt="loisirs"/> 
                                <h5 class="CatHomeSelect">Loisirs</h5>
                                    <div class="card-footer">
                                        <input class="InputHomeSelect" type="reset" value="Jouets" />
                                        <input class="InputHomeSelect" type="reset" value="Jeux vidéos" />
                                        <input class="InputHomeSelect" type="reset" value="Jeux de société" />
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 p-0">
                        <div class="card h-100 border-0">
                            <div class="card-body border-dark border-left border-top">
                                <img class="imgHomeSelect" src={icon_strawler} alt="bébé"/>
                                <h5 class="CatHomeSelect">Bébé</h5>
                                    <div class="card-footer">
                                        <a href="BrandsBebe"><input class="InputHomeSelect" type="reset" value="Couches"/></a>
                                        <input class="InputHomeSelect" type="reset" value="Nourriture" />
                                        <input class="InputHomeSelect" type="reset" value="Accessoires" />
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
