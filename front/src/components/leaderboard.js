import React, {Component} from 'react';
import '../style/App.css';

class Leaderboard extends Component {

    render() {
      var i = 0;
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
                    {this.props.usuarios.map(usuario =>
                      {
                        i++;
                        return(
                          <tr key={i}>
                            <th scope="row" key={i+1}>{i}</th>
                            <td key={i+2}>{usuario.name}</td>
                            <td key={i+3}>{usuario.score}</td>
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
