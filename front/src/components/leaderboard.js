import React, {Component} from 'react';
import '../style/App.css';

class Leaderboard extends Component {

    render() {
        return (
          <div>
            <div className='row'>
              <div className='col-md-12'>
                <h1>Leaderboard</h1>
              </div>
            </div>
            <hr className="content-divider"></hr>
            <div className='row'>
              <div className='col-md-12'>
                <table className="table">
                  <thead className="thead-inverse">
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Puntaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.usuarios.map((usuario, index) =>
                      {
                        return(
                          <tr key={index}>
                            <th scope="row" key={index+1}>{index}</th>
                            <td key={index+2}>{usuario.name}</td>
                            <td key={index+3}>{usuario.score}</td>
                          </tr>
                        );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}
export default Leaderboard;
