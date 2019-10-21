import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './card.css'
import user from '../../Images/user.png'
class CardExample extends Component {
state = {
  flipped: false
}

handleFlipping = () => {
  this.setState({ flipped: !this.state.flipped });
}

render() {
  let x = this.props.data
  console.log(x);
  return (
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={12} xl={4}>
<div >
<div id='Main' className="card testimonial-card">
        <div className="card-up indigo lighten-1" />
        <div className="avatar mx-auto white">
        {this.props.img ?
            <img src={this.props.img} className="rounded-circle z-depth-0"
                          style={{ height: "35px", padding: 0 }} alt="" />
                      :
          <img src={x.image} style={{width:100,height:100}} className="rounded-circle" alt="User Profile" />
                      // <span style={{padding:15,background:'#ffcb2b',borderRadius:100,color:'white'}}>{this.props.email.slice(0,1).toUpperCase()}</span>
        }
        </div>
        <div className="card-body">
          <h4 className="card-title">{this.props.name ? this.props.name : x.name}</h4>
          <p>Email : {x.email}</p>
          <p>Address : {x.address}</p>
          <hr />
          {this.props.map}
        </div>
      </div>
        </div>
        </Grid>
        </Grid >
    )
  }
}

export default CardExample;