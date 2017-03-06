import React, {Component} from 'react';
import '../style/App.css';

class Home extends Component {

    /*  constructor(props)
  {
    super(props)
  }*/

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Bienvenido a FootScores</h1>
                    </div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className="box">
                                <h3>¿Como usar FootScores?</h3>
                                <hr className="content-divider"></hr>
                                <ul>
                                    <li>Ve a la sección de Leagues</li>
                                    <li>Selecciona tu liga favorita
                                    </li>
                                    <li>Adivina el resultado final de los partidos!</li>
                                    <li>Adivina los resultados para ganar puntos y subir en el Leaderboard!</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                          <img alt='estadio' className="img-home img-circle img-responsive pull-right"
                            src={require("../img/estadio.jpg")}></img>
                        </div>
                    </div>
                    <hr className="content-divider"></hr>
                    <div className='row'>
                      <div className='col-md-6'>
                        <img alt='balon' className="img-home img-circle img-responsive  pull-left"
                          src={require("../img/balon.jpg")}></img>
                      </div>
                        <div className='col-md-6'>
                            <div className="box">
                                <h3>¿Como funciona FootScores?</h3>
                                <hr className="content-divider"></hr>
                                <p>En FootScores trabajamos para brindarte la mejor experiencia posible, nuestro servidor se conecta constantemente con un API y obtiene los próximos partidos de las mejores competencias! Cada hora se analizan los valores ingresados por el usuario, se calculan los puntos y se actualiza el Leaderboard.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="content-divider"></hr>
            </div>
        );
    }
}
export default Home;
