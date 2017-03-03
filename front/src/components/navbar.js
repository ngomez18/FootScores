import React, {Component} from 'react';
import {Nav} from 'react-bootstrap/lib/'
import '../style/App.css';

class Navegacion extends Component {




    /*  constructor(props)
  {
    super(props)
  }*/

  render() {
      return (
          <div>
              <Nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <a className="navbar-brand" href="#">FootScores</a>
                      </div>
                      <ul className="nav navbar-nav">
                          <li className="active">
                              <a href="#">Home</a>
                          </li>
                          <li>
                              <a href="#">Leaderboard</a>
                          </li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <a href="#">
                                  <span className="glyphicon glyphicon-user"></span>
                                  Sign Up</a>
                          </li>
                          <li>
                              <a href="#">
                                  <span className="glyphicon glyphicon-log-in"></span>
                                  Login
                              </a>
                          </li>
                      </ul>
                  </div>
              </Nav>
          </div>
      );
  }
}
export default Navegacion;
