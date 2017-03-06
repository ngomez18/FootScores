import React, {Component} from 'react';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      name: ''
    }
  }

  render() {
    return(
      <div className="text-center">
          <h2>Sign up</h2>
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
              <div className="form-group">
                  <input className="form-control" placeholder="Email" name="email" type="text" onChange={(event) => {
                    this.setState({
                      email: event.target.value
                    });
                  }}/>
              </div>
              <div className="form-group">
                  <input className="form-control" placeholder="Name" name="name" type="text" onChange={(event) => {
                    this.setState({
                      name: event.target.value
                    });
                  }}/>
              </div>
              <button className="btn btn-md btn-primary" onClick={() => {
                this.props.signup(this.state.username, this.state.password, this.state.email, this.state.name);
                this.props.close();
              }}> Sign up </button>
              <button className="btn btn-md btn-danger" onClick={() => {this.props.close()}}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default Signup
