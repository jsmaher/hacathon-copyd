import React from 'react'
import {CardExample,NavbarPage,Footer,Map} from '../../Component/index'
import {firebaseApp} from '../../Config/Firebase/firebase'
export default class Profile extends React.Component{
    constructor() {
        super();
        this.state = {
            check: '',
            userEmail:'',
            user:'',
            displayName:'',
            userimage:''
        }
    }
    componentDidMount() {
        let that = this
        firebaseApp.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                firebaseApp.firestore().collection('users').doc(user.uid).get().then(res => {
                    let value=res.data();
                    let emailVerified = user.emailVerified;
                    that.setState({ check: emailVerified,userEmail:user.email,userName:user.displayName,userimage:user.photoURL,user:value })
                })
            } else {
                // No user is signed in.
            }
        });

    }
    render() {
        return (
            <div>
                <NavbarPage img={this.state.userimage} data={this.state.user} email={this.state.userEmail} name={this.state.displayName} path={this.props.history} list={[{ name: 'Home',path:'/Home' },{name:'About'},{name:'Contact'}]} />
                    <div >
                        <center>
                    <CardExample map={<Map />} data={this.state.user} img={this.state.userimage} email={this.state.userEmail} name={this.state.displayName} />
                    </center>
                    </div>
                <Footer />
            </div>
        )
    }
}