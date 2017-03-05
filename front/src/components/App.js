import React, { Component } from 'react';
//import axios from 'axios';
import '../style/App.css';
import Navegacion from './navbar';
import axios from 'axios';
const URL = "http://localhost:3000";

class App extends Component {

 constructor(props)
  {
    super(props);
    this.state=
    {
      usuarios:[]
    }
  }

  getUsers()
  {
    axios.get(URL+"/users/").then(response => {
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
          <Navegacion onClickLeaderboard={this.getUsers.bind(this)}></Navegacion>
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
