import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"



class Signin extends Component{
    constructor(){
		super()
		this.state = {
			err : '',
			email:'',
			password:'',
			
		}
		this.changeEmail = this.changeEmail.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	

	changeEmail(event){
		this.setState({
			email:event.target.value
		})
	}

	changePassword(event){
		this.setState({
			password:event.target.value
		})
	}

	

	onSubmit(event){
		event.preventDefault()

		const logedin = {
			
			email: this.state.email,
			password: this.state.password,
			

		}

		axios.post('http://localhost:4000/app/signin', logedin)
		.then(response => {console.log(response.data)
            this.setState({
                err : response.data
            })
            if(this.state.err ==="logedin"){
                window.location= "/dashboard"
            }
        })
	}
    render(){
        return(
            <div>
                <img
                    className="home__image"
                    src={require('./backgroun.jpeg')}
                    alt=""
                />
                <p className="err">{this.state.err}</p>
                <div className="boxlog">
                    <h2>Login</h2>
                    <form  method="post" onSubmit={this.onSubmit}>
                        <div className="inputbox">
                            <input type="text" name="email" required="" value={this.state.email} onChange={this.changeEmail} />
                            <label>  email :</label>
                        </div>
                        <div className="inputbox">
                            <input type="password" name="password" required="" value={this.state.password} onChange={this.changePassword}  />
                            <label>  Password :</label>
                        </div>
                        <button className="submit" name="login_user">     
                        LOGIN
                        </button>
                    </form>
            
                </div>
                <div className="mmber">
                        <p className="notmembre"> Not yet a member ? <Link className="signup" to="/signup"> Sign Up</Link></p>
                        
                </div>	
      </div>
        )
    }
}
export default Signin;