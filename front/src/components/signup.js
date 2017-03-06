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
          <form role="form" onSubmit={() => {
            this.props.onSubmit(this.state.username, this.state.password, this.state.email, this.state.name);
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
              <input type="submit" className="btn btn-md btn-primary" />
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
