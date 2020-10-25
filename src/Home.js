import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css"


class Home extends Component {
    render(){
        return(
            <div className="home">
                <img
                    className="home__image"
                    src={require('./homebackground.jpg')}
                    alt=""
                />
                <h1 className="welcome">
                    Welcome guest
                </h1>
                <p className="services"> Our websites offer the following services : <br/>- Upload an image to the server<br/>- See the last picture you have uploaded<br/>- Find all the pictures on the server</p>
                <h2 className="enjoy">
                    Log in to start your journey
                </h2>
                <Link className="signinbtn" to="/signin"> Sign In</Link>
                <Link className="signupbtn" to="/signup"> Sign Up</Link>
            </div>
        )
    }

}    

export default Home;
