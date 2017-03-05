import React, {Component} from 'react';
import '../style/App.css';
class Leagues extends Component {

    /*  constructor(props)
  {
    super(props)
  }*/

    render() {
        var i = 0;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Partidos de la semana</h1>
                    </div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3>Selecciona la competencia</h3>
                    </div>
                    <div className='col-md-6'></div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                    <div className='col-md-12'>

                        {this.props.ligaBBVA.map(partido => {
                            i++;
                            return (
                                <div key={i} className='row'>
                                    <table key={i + 1} className='table-matches'>
                                        <tbody key={i + 2}>
                                            <tr key={i + 3}>
                                                <td className='col-md-4 matches' key={i + 4}>{partido.homeTeamName}</td>
                                                <td className='col-md-4 matches' key={i + 5}>
                                                    <span className='col-md-4'></span>
                                                    <input className='col-md-2' type="number" name="homeGoals"></input>
                                                    <input className='col-md-2' type="number" name="awayGoals"></input>
                                                    <span className='col-md-4'></span>
                                                </td>
                                                <td className='col-md-4 matches' key={i + 6}>{partido.awayTeamName}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        );
    }
}
export default Leagues;
