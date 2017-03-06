import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="text-center">
          <h2>Sign In</h2>
          <hr />
        <div>
              <div className="form-group">
                  <input className="form-control" placeholder="Username" name="user" type="text" onChange={(event) => {
                    this.setState({
                      username: event.target.value
                    });
                  }}/>
              </div>
              <div className="form-group">
                  <input className="form-control" placeholder="Password" name="password" type="password" onChange={(event) => {
                    this.setState({
                      password: event.target.value
                    });
                  }}/>
              </div>
              <button className="btn btn-md btn-success" onClick={() => {
                this.props.login(this.state.username, this.state.password);
                this.props.close();
              }}>Sign in</button>
              <button className="btn btn-md btn-danger" onClick={() => {this.props.close()}}>Cancel</button>
        </div>
      </div>
    );
  };
}

export default Login
