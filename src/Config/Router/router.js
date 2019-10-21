import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, SignUp, Home, Verify, Profile } from '../../Container/index'
import {Dashboard,AdminLogin, AddQuiz, EditQuiz, DeleteQuiz} from '../../Container/AdminPanel/index'

export default class BasicRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route  path="/Sign-Up" component={SignUp} />
                <Route  path="/Home" component={Home} />
                <Route  path="/verify-email" component={Verify} />
                <Route  path="/Profile" component={Profile} />
                <Route path="/admin" component={AdminLogin} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/add-quiz" component={AddQuiz} />
                <Route path="/edit-quiz" component={EditQuiz} />
                <Route path="/delete-quiz" component={DeleteQuiz} />
            </Router>
        )
    }
}