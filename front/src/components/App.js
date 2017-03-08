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
    super(props);
    this.state= {
      usuarios:[],
      signupModalOpen: false,
      loginModelOpen: false,
      token: '',
      thereIsToken: false
    };
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.addTokenToState = this.addTokenToState.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  };

  signup(username, password, email, name) {
    console.log("Signing up new user");
    if(username && password && email && name) {
      console.log("Valid fields");
      axios({
        url: URL+'/users/',
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        data: {
          username: username,
          password: password,
          email: email,
          name: name
        },
        responseType: 'json',
      }).then(function (response) {
        console.log("Got the following response:");
        console.log(JSON.stringify(response));
      }).catch(function (error) {
        console.log(error);
      });
    }
  };

  login(username, password) {
    console.log("Singing in....");
    if(username && password) {
      console.log("Username and password provided");
      axios({
        url: URL+'/auth/login',
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        data: {
          username: username,
          password: password,
        },
        responseType: 'json',
      }).then(function (response) {
        if(response.data.success) {
          this.addTokenToState(response.data.token);
          this.closeLoginModal();
          console.log('Token set to ' + response.data.token);
        }
      }.bind(this)).catch(function (error) {
        console.log(error);
      });
    }
  };

  openLoginModal() {
    this.setState({loginModalOpen: true});
  };

  closeLoginModal() {
    this.setState({loginModalOpen: false});
  };

  addTokenToState(token) {
    this.setState({
      token: token,
      thereIsToken: true
    });
  }

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
        {/* <p>{this.state.token || 'No hay token'}</p> */}
        <Modal
          isOpen={this.state.signupModalOpen}
          contentLabel='Sign up'
          style={signupStyle}
        >
          <Signup
            signup={this.signup.bind(this)}
            close={this.closeSignupModal.bind(this)}
          >
          </Signup>
        </Modal>
        <Modal
          isOpen={this.state.loginModalOpen}
          contentLabel='Log in'
          style={loginStyle}
        >
          <Login
            login={this.login.bind(this)}
            close={this.closeLoginModal.bind(this)}
            ></Login>
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
          {this.state.thereIsToken ?
            (
              <div className='col-md-9'>
                {React.cloneElement(this.props.children, {...this.state})}
              </div>
            ):(
              <div className='col-md-9'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h1>Bienvenido a FootScores!</h1>
                  </div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                  <div className='col-md-12'>
                    <h3>Regístrate o inicia sesión!</h3>
                  </div>
                </div>
              </div>
            )}
          <div className='col-md-1'></div>
        </div>
      </div>
    );
  }
}


export default App;
