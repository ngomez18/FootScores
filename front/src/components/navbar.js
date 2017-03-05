import React, {Component} from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';
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
                            FootScores
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                          <LinkContainer to="/home">
                            <NavItem eventKey={1}>Home</NavItem>
                          </LinkContainer>
                          <LinkContainer to="/leagues">
                            <NavItem eventKey={2}>Leagues</NavItem>
                          </LinkContainer>
                          <LinkContainer to="/leaderboard">
                            <NavItem eventKey={3}>Leaderboard</NavItem>
                          </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                          <NavItem eventKey={1} href="#">
                            <span className='glyphicon glyphicon-user'></span>
                            Sign Up
                          </NavItem>
                          <NavItem eventKey={2} href="#">
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
