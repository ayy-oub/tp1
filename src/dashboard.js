import React, { Component } from "react";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
import axios from "axios"

class Dashboard extends Component{
   constructor() {
       super();
       this.state= {
           logedin : "not loged in"
       };
   }
   componentDidMount = () => {
       axios.get("/app/getUser").then(response =>{
           console.log(response.data)
       })
   }
   
    
    
	
    render(){
        return(
            <div>
                <img
                    className="home__image"
                    src={require('./homebackground.jpg')}
                    alt=""
                />
                <div className="infobox">
                    <div id="content">
                        <div id='img_div'>
                            <img className="profilimg" src= {require('./man.png')} alt=""/>
                        </div>
                        <div className="addimage">
                        <form method="post" enctype = "multipart/form-data" >
                            
                            <input type="file" name="img" onChange={this.onChangeImage} />
                            <button className="uploadImage" onClick="handelUpload"> Upload image</button>
                            
                        </form>
                        </div>
                    </div>
                        <form className="profileform" method="POST" enctype="multipart/form-data">
                        <div className="inputbox">
                            <input type="text" name="username" />
                            <label >{this.state.logedin} </label>
                        </div>
                        <div className="inputbox">
                            <input type="email" name="email" />
                            <label >Email  : </label>
                        </div>
                        <div className="inputbox">  
                            <input type="text" name="phone" />
                            <label>Phone  : </label>
                        </div>
                        <div className="inputbox">  
                            <input type="text" name="address" />
                            <label>Adresse : </label>
                        </div>
                        
                            <Link className="profiledit" to="/dashboard"> Edit profile</Link>
                            
                        </form>
                </div> 
            </div>

        )
    }
}
export default Dashboard;