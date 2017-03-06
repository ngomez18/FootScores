import React, {Component} from 'react';

class Login extends Component {

  render() {
    return (
      <div className="text-center">
          <h2>Sign In</h2>
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
              <input type="submit" className="btn btn-md btn-success" />
            </fieldset>
          </form>
        </div>
      </div>
    );
  };
}

export default Login
