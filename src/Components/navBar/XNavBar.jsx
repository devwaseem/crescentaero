import React, { Component } from 'react';
import Scroll from 'react-scroll-to-element'
import {Navbar,NavItem,Nav,NavbarBrand,NavLink,NavbarToggler,Collapse} from 'reactstrap'
import crescentlogo from '../../images/crescent.png'

class XNavbar extends Component {

  state = {
    isOpen: false
  }



    render(){
        return(
          <div>
          <Navbar color="white" fixed="top" light expand="md" >
            <NavbarBrand href="/">
            <img src={crescentlogo} className="NavBrandLogo"/></NavbarBrand>
            <NavbarToggler onClick={()=>this.setState({isOpen: !this.state.isOpen})} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Scroll type="class" element="main-title-section">
                    <NavLink href="">Home</NavLink>
                  </Scroll>
                </NavItem>
                <NavItem>
                  <Scroll type="class" element="workshop-detail-container" offset={-100}>
                    <NavLink href="">Workshop</NavLink>
                  </Scroll>
                </NavItem>
                <NavItem>
                  <Scroll type="class" element="deliverables-container" offset={-100}>
                    <NavLink href="">Deliverables</NavLink>
                  </Scroll>
                </NavItem>
                <NavItem>
                  <Scroll type="class" element="organizers-container" offset={-100}>
                    <NavLink href="">Organizers</NavLink>
                  </Scroll>
                </NavItem>
                <NavItem>
                  <Scroll type="class" element="registration-container" offset={-100}> 
                    <NavLink href="">Register</NavLink>
                  </Scroll>
                </NavItem>
                <NavItem>
                  <Scroll type="class" element="venue-container" offset={-100}> 
                    <NavLink href="">Contact</NavLink>
                  </Scroll>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        )
    }

}

export default XNavbar;