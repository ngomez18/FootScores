import React, {Component} from 'react';
import '../style/App.css';

class Welcome extends Component {

    /*  constructor(props)
  {
    super(props)
  }*/

    render() {
        return (
          <div>
            <div className='row welcome'>
              <div className='col-md-12'>
                <h1>¡Bienvenido a FootScores!</h1>
                <h3>Un lugar donde puedes adivinar el resultado de los mejores partidos</h3>
              </div>
            </div>
            <hr className="content-divider"></hr>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row welcome'>
                  <h4>Contamos con las mejores competencias del mundo:</h4>
                </div>
                <div className='row'>
                  <div className='col-md-3'></div>
                  <div className='col-md-6'>
                    <ul id='welcome-list'>
                      <li>Champions League</li>
                      <li>Premiere League</li>
                      <li>Liga Santander</li>
                      <li>Bundesliga</li>
                      <li>Serie A</li>
                      <li>.. y muchas más!</li>   
                    </ul>
                  </div>
                  <div className='col-md-3'></div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Welcome;
