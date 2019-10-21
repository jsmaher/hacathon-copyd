import React from 'react'
import { firebaseApp } from '../../Config/Firebase/firebase'
import { Verify } from '../index'
import{NavbarPage,Footer,CarouselPage,Map} from '../../Component/index'
import './Home.css'

export default class Home extends React.Component {
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
                {this.state.check ?
                    <div >
                        <NavbarPage img={this.state.userimage} data={this.state.user} email={this.state.userEmail} name={this.state.displayName} path={this.props.history} list={[{ name: 'Home',path:'/Home' },{name:'About'},{name:'Contact'}]} />
                        <CarouselPage />
                        <Footer />
                    </div>
                     :
                    <div>
                        <Verify email={this.state.userEmail} />
                    </div>} 
            </div>
        )
    }
}