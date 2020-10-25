import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"


class Register extends Component {
	constructor(){
		super()
		this.state = {
			userName:'',
			email:'',
			password:'',
			confirmPassword:'',
			err : ''
		}
		this.changeUserName = this.changeUserName.bind(this)
		this.changeEmail = this.changeEmail.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.changeConfPass = this.changeConfPass.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	changeUserName(event){
		this.setState({
			userName:event.target.value
		})
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

	changeConfPass(event){
		this.setState({
			confirmPassword:event.target.value
		})
	}

	onSubmit(event){
		event.preventDefault()

		const registred = {
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password,
			confirmPassword: this.state.confirmPassword,

		}

		axios.post('http://localhost:4000/app/signup', registred)
		.then(response => {console.log(response.data)
		this.setState({
			err : response.data
		})
		if(this.state.err ==="logedin"){
			window.location= "/dashboard"
		}
	})
	}
  render() {
    return (
		<div>
			<img className="home__image" src={require('./backgroun.jpeg')} alt="" />
			<p className="err">{this.state.err}</p>
        <div className="box">
            <h2>Register</h2>
            <form method="post" onSubmit={this.onSubmit}>
            <div className="inputbox">
					<input type="text"  required="" value={this.state.userName} onChange={this.changeUserName} />
					<label for="name">  Username :</label>
			</div>
            <div className="inputbox">
					<input type="text" required="" value={this.state.email} onChange={this.changeEmail} />
					<label for="name">  Email :</label>
			</div>
            <div className="inputbox">
					<input type="password"  required="" value={this.state.password} onChange={this.changePassword} />
					<label for="name">  password : </label>
			</div>
            <div className="inputbox">
					<input type="password"  required="" value={this.state.confirmPassword} onChange={this.changeConfPass} />
					<label for="name">  Confirm password :</label>
			</div>
            <button className="submit" name="reg_user">
						
				Sign Up
				</button>
            </form>
        </div>
		<div className="mber">
			<p className="already">
			 Already a member ? <Link className="signin" to="/signin"> Sign In</Link>
			</p>
		</div>
		</div>

            	
		)
	}
}    
export default Register;       