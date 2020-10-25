import React, { Component } from "react";


class Find extends Component{
    render(){
        return(
            <div>
                <img
                    className="home__image"
                    src={require('./backgroun.jpeg')}
                    alt=""
                />
                <h1 className="show">Here is all the pictures you have uploaded to the server</h1>
                <div className='img1_in_server'>
                    <img className="showimage1" src= {require('./man.png')} alt=""/>
                </div>
            </div>
        )
    }
}
export default Find;