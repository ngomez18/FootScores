import React, {Component} from 'react';
import {Nav, Navbar, Toggle, Collapse, Header, NavItem} from 'react-bootstrap/lib/'
import '../style/App.css';

class Navegacion extends Component {

    /*  constructor(props)
  {
    super(props)
  }*/

    render() {
        return (
            <div>
                <Navbar className="navbar-inverse">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">FootScores</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                          <NavItem eventKey={1} href="#">Home</NavItem>
                          <NavItem eventKey={2} href="#">Leaderboard</NavItem>
                        </Nav>
                        <Nav pullRight>
                          <NavItem eventKey={2} href="#">
                            <span className='glyphicon glyphicon-user'></span>
                            Sign Up
                          </NavItem>
                          <NavItem eventKey={1} href="#">
                            <span className="glyphicon glyphicon-log-in"></span>
                            Login
                          </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Navegacion;
