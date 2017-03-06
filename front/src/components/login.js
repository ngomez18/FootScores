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
          <form role="form" onSubmit={() => {
            this.props.login(this.state.username, this.state.password);
          }}>
            <fieldset>
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
              <input type="submit" className="btn btn-md btn-success" />
            </fieldset>
          </form>
        </div>
      </div>
    );
  };
}

export default Login
