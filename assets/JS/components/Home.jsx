import React from 'react';


export default class Home extends React.Component {
  render() {
    return (

        <div className="row">
            <h4>Sélectionner le secteur d'activité de la marque:</h4>

            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/50x50" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">ALIMENTAIRE</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">DROGUERIE</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="http://placehold.it/300x200" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">BOISSONS</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
