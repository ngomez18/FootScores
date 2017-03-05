import React, { Component } from 'react';
//import axios from 'axios';
import '../style/App.css';
import Navegacion from './navbar';
import axios from 'axios';
const URL = "http://localhost:3000";

class App extends Component {

 constructor(props)
  {
    axios.get(URL+"/users/leaderboard").then(response => {
      this.setState(
      {
        usuarios: response.data
      });
      console.log(response.data);
    });
    axios.get(URL+"/fixtures/PD").then(response => {
      this.setState(
      {
        ligaBBVA: response.data
      });
      console.log(response.data);
    });
    super(props);
    this.state=
    {
      usuarios:[],
      ligaBBVA:[]
    }
  }

  getUsersLeaderboard()
  {
    axios.get(URL+"/users/leaderboard").then(response => {
      this.setState(
      {
        usuarios: response.data
      });
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <div className='row'>
          <Navegacion onClickLeaderboard={this.getUsersLeaderboard.bind(this)}></Navegacion>
        </div>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-9'>
            {React.cloneElement(this.props.children, {...this.state})}
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    );
  }
}
export default App;
