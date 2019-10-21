import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBNav, MDBNavItem, MDBNavLink,
MDBContainer } from "mdbreact";
import {FirebaseApp} from './../../Config/Firebase/firebase'

class PanelPage extends React.Component{


  componentDidMount=()=>{
    FirebaseApp.auth().onAuthStateChanged((user)=> {
      if (user) {
        if(user.emailVerified){
          this.props.history.push("/home")
        }
        else{
          this.props.history.push("/verification")
        }
        
      } else {
        this.props.history.push("/")
      }
    });
  }

render(){

  return (
    <div style={{backgroundColor:"#4c807a"}}>
    <br/><br/><br/><br/><br/><br/><br/><br/>
<MDBContainer >
  <MDBCard style={{backgroundColor:"#004e48"}} className="text-center">
    <MDBCardHeader>
      <MDBNav header>

      </MDBNav>
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle style={{color:"white"}}>Welcome User</MDBCardTitle>
      <MDBCardText style={{color:"white"}}>
      Please verify your email
      </MDBCardText>
      <MDBBtn style={{backgroundColor:"#4c807a",height:50}}>Refresh your page</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>
);
}
};

export default PanelPage;