import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Logout } from '../../Store/Actions/auth-action'
import { connect } from 'react-redux'
import user from '../../Images/user.png'

class NavbarPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  logOut(data) {
    console.log(data, 900);
    this.props.Logout(this.props.path)
  }
  render() {
    let x = this.props.data
    console.log(x);
    return (
      <div style={{ background: "url('http://sheffieldhatters.com/wp-content/uploads/2014/09/backgrounds-for-websites-3.jpg')" }}>
        <Router>
          <MDBNavbar dark expand="md" style={{ marginTop: "10px" }}>
            <MDBNavbarBrand>
              <strong className="white-text">MDBNavbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
                {
                  this.props.list.map((val) => {
                    return <MDBNavItem onClick={()=>this.props.path.push(val.path)}>
                      <MDBNavLink className="waves-effect waves-light" to="#!">
                        <MDBIcon  className="mr-1" />{val.name}</MDBNavLink>
                    </MDBNavItem>
                  })
                }
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className="dopdown-toggle" nav>
                      {this.props.img ?
                        <img src={this.props.img} className="rounded-circle z-depth-0"
                          style={{ height: "35px", padding: 0 }} alt="" />
                      :
                      <img src={x.image} style={{width:50,height:50}} className="rounded-circle" alt="woman avatar" />
                      // <span style={{padding:15,background:'#ffcb2b',borderRadius:100,color:'white'}}>{this.props.email.slice(0,1).toUpperCase()}</span>
                      }
                        <span style={{ marginLeft: '5px' }}>{this.props.name ? this.props.name : x.name}</span>
                </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      <MDBDropdownItem onClick={()=>this.props.path.push('/Profile')}>My account</MDBDropdownItem>
                      <MDBDropdownItem onClick={() => this.logOut(this.props.path)} >Logout</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.name,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    Logout: (path) => dispatch(Logout(path)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavbarPage);