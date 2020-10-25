import React, { Component } from "react";
import "./Show.css";


class Show extends Component{
    render(){
        return(
            <div>
                <img
                    className="home__image"
                    src={require('./backgroun.jpeg')}
                    alt=""
                />
                <h1 className="show">Here is the last picture you upload to the server</h1>
                <div className='img_in_server'>
                    <img className="showimage" src= {require('./man.png')} alt=""/>
                </div>
            </div>
        )
    }
}
export default Show;