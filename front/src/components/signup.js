import React, {Component} from 'react';
import Modal from 'react-modal';

class Signup extends Component {

  render() {
    return(
      <div className="text-center">
          <h3>Sign up</h3>
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
              {/* Change this to a button or input when using this as a form */}
              <input type="submit" className="btn btn-lg btn-primary" />
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
