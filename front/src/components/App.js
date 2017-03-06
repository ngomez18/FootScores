import axios from 'axios';
import React, { Component } from 'react';
import Modal from 'react-modal';
import Signup from './signup';
import Login from './login';
import Navegacion from './navbar';
import '../style/App.css';

const URL="https://footscores.herokuapp.com";

const signupStyle={
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    position              : 'relative',
    width                 : '350px',
    height                : '400px',
    borderRadius          : '6px',
  }
};

const loginStyle={
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    position              : 'relative',
    width                 : '350px',
    height                : '300px',
    borderRadius          : '6px',
  }
};

class App extends Component {

  constructor(props) {
    axios.get(URL+"/users/leaderboard").then(response => {
      this.setState({
        usuarios: response.data
      });
    });
    axios.get(URL+"/fixtures/PD").then(response => {
      this.setState({
        ligaBBVA: response.data
      });
    });
    super(props);
    this.state= {
      usuarios:[],
      ligaBBVA:[],
      signupModalOpen: false,
      loginModelOpen: false,
      token: ''
    };
  };

  openLoginModal() {
    this.setState({loginModalOpen: true});
  }

  closeLoginModal() {
    this.setState({loginModalOpen: false});
  }

  signup() {

  }

  login(username, password) {
    axios.post(URL+"/auth/login", {
      username: username,
      password: password
    }).then(function (response) {
      if(response.token) {
        this.setState({
          token: response.token
        })
      }
    }).catch(function (error) {
      console.log(error);
    });
  };

  openSignupModal() {
    this.setState({signupModalOpen: true});
  }

  closeSignupModal() {
    this.setState({signupModalOpen: false});
  }

  getUsersLeaderboard() {
    axios.get(URL+"/users/leaderboard").then(response => {
      this.setState({
        usuarios: response.data
      });
    });
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.signupModalOpen}
          onRequestClose={this.closeSignupModal.bind(this)}
          contentLabel='Sign up'
          style={signupStyle}
          signup={this.signup.bind(this)}
        >
          <Signup></Signup>
        </Modal>
        <Modal
          isOpen={this.state.loginModalOpen}
          onRequestClose={this.closeLoginModal.bind(this)}
          contentLabel='Log in'
          style={loginStyle}
          login={this.login.bind(this)}
        >
          <Login></Login>
        </Modal>
        <div className='row'>
          <Navegacion
            onClickLeaderboard={this.getUsersLeaderboard.bind(this)}
            onClickSignup={this.openSignupModal.bind(this)}
            onClickLogin={this.openLoginModal.bind(this)}
          >
          </Navegacion>
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
