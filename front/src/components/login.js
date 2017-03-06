import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="text-center">
          <h3>Sign In</h3>
          <hr />
        <div>
          <form role="form">
            <fieldset>
              <div className="form-group">
                  <input className="form-control" placeholder="Username" name="user" type="text" />
              </div>
              <div className="form-group">
                  <input className="form-control" placeholder="Password" name="password" type="password" value=""/>
              </div>
              {/* Change this to a button or input when using this as a form */}
              <a href="javascript:;" className="btn btn-lg btn-success">Login</a>
            </fieldset>
          </form>
        </div>
      </div>
    );
  };
}

export default Login
