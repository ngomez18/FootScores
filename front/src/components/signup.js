import React, {Component} from 'react';

class Signup extends Component {

  render() {
    return(
      <div className="text-center">
          <h2>Sign up</h2>
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
              <div className="form-group">
                  <input className="form-control" placeholder="Email" name="email" type="text" />
              </div>
              <div className="form-group">
                  <input className="form-control" placeholder="Name" name="name" type="text" />
              </div>
              <input type="submit" className="btn btn-md btn-primary" />
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
