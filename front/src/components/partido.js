import React, {Component} from 'react';
import axios from 'axios';
const URL = "https://footscores.herokuapp.com";
import '../style/App.css';

class Partido extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homeGoals: '',
            awayGoals: '',
            user: 'prueba',
            send: false,
            homeGoalsSent: '',
            awayGoalsSent: ''
        }
    }
    setHomeGoals(event) {
    this.setState({homeGoals: event.target.value}, function() {
      console.log(this.state);
    });
  }
  setAwayGoals(event) {
    this.setState({awayGoals: event.target.value}, function() {
        console.log(this.state);
    });
  }

  postGuess(event) {
    var config = {
      headers: {'Content-Type': 'application/json'}
    };
    if(this.state.homeGoals ==='' || this.state.awayGoals ==='') {
      window.alert('Debes ingresar in valor');
    }
    else {
      var homeGoalsNumber = parseInt(this.state.homeGoals,10);
      var awayGoalsNumber = parseInt(this.state.awayGoals,10);
      var guess = {
        "date": this.props.partido.date,
        "homeTeam": this.props.partido.homeTeamName,
        "awayTeam": this.props.partido.awayTeamName,
        "homeTeamScore": homeGoalsNumber,
        "awayTeamScore": awayGoalsNumber
      }
      var guessJSON = JSON.stringify(guess);
      axios.put(URL+ "/users/" + this.state.user + "/guess", guessJSON, config)
      .then(response => {
        this.setState({
          homeGoals: '',
          awayGoals: '',
          user: 'prueba',
          send: true,
          homeGoalsSent: this.state.homeGoals,
          awayGoalsSent: this.state.awayGoals
        });
      });
    }
  }

    render() {
      const envio = this.state.send;
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <table className='table-matches'>
                            <tbody>
                                <tr>
                                    <td className='col-md-4 col-xs-3 matches'>{this.props.partido.homeTeamName}</td>
                                    <td className='col-md-4 col-xs-6 matches'>
                                        <div className='row'>
                                            <span className='col-md-4 col-xs-0'></span>
                                            {envio ? (
                                              <div className='col-md-4'>
                                                <div className='row'>
                                                  <p>Buena Suerte!</p>
                                                </div>
                                                <div className='row'>
                                                  <span className='col-md-12 user-guess'>{this.state.homeGoalsSent} - {this.state.awayGoalsSent}</span>
                                                </div>
                                              </div>

                                            )
                                          : (<form>
                                                <div className='row'>
                                                    <input className='col-md-2 col-xs-6' type="number" name="homeGoals" onChange={this.setHomeGoals.bind(this)}></input>
                                                    <input className='col-md-2 col-xs-6' type="number" name="awayGoals" onChange={this.setAwayGoals.bind(this)}></input>
                                                </div>
                                                <div className='row'>
                                                    {/* <input type="text" onChange={(event) => {
                                                      this.setState({
                                                        user: event.target.value
                                                      })
                                                    }}/> */}
                                                    <button type='button' className='guessButton' onClick={this.postGuess.bind(this)}>Enviar</button>
                                                </div>
                                            </form>)}
                                            <span className='col-md-4 col-xs-0'></span>
                                        </div>
                                    </td>
                                    <td className='col-md-4 col-xs-3 matches'>{this.props.partido.awayTeamName}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Partido;
