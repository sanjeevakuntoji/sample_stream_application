import React, { Component } from 'react';
import {connect } from 'react-redux';
import { SignIn, SignOut } from '../action'

class GoogleAuth extends Component {

// state = { isSignedIn: null};

componentDidMount () {
    window.gapi.load('client:auth2',() => {
        window.gapi.client.init({
            clientId:'1035041600857-6t7kd6ul6j0lgjikiebh5drilnrf8nlk.apps.googleusercontent.com',
            scope:'email'
        }).then(()=> {
            this.auth = window.gapi.auth2.getAuthInstance();
            // this.setState({isSignedIn: this.auth.isSignedIn.get()});
            this.onAuthChange(this.auth.isSignedIn.get())
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    });
}

// onAuthChange = () => {
//     this.setState({isSignedIn: this.auth.isSignedIn.get()})
// }
onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
        this.props.SignIn(this.auth.currentUser.get().getId());
    }else {
        this.props.SignOut();
    }
}

onSignInClick= () => {

    this.auth.signIn();
}

onSignOutClick= () => {
     
    this.auth.signOut();
}
renderAuthButton() {
    if(this.props.isSignedIn === null ) {
        return <div> I dont know if we are signed in</div>
    }else if(this.props.isSignedIn) {
        return (
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className = "google icon" />
                Sign Out
            </button>
        )
    }else {
        return(
            <button onClick={this.onSignInClick}className="ui red google button">
                <i className="google icon" />
                Sign in with Google
            </button>
        )
    }
}

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}
export default connect( mapStateToProps, { SignIn, SignOut})(GoogleAuth);