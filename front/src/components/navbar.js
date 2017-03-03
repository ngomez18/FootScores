import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap/lib/'
import '../style/App.css';


class Navegacion extends Component {

/*  constructor(props)
  {
    super(props)
  }*/


  render() {
    return (
      <div>
        <Nav className='navbar navbar-inverse navbar-fixed-top'>
          <div className='container-fluid'>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">FootScores</a>
              </Navbar.Brand>
            </Navbar.Header>
            <ul className="nav navbar-nav">
              <li className=""><a href="#">Home</a></li>
              <li><a href="#">Leaderboard</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </Nav>
      </div>
    );
  }
}
export default Navegacion;
