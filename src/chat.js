import React, { Component } from "react";
import "./chat.css";
import "./chatbackend";
import "bootstrap/dist/css/bootstrap.min.css"

class Chat extends  Component{
    render(){
        return(
            <div>
        <div class="chat-contrainer">
        <div class="chat-header">
            <div class="logo">
                <i class="fab fa-instagram"></i>
                <h3>Contact users</h3>
            </div>
            <p id="your-name">Your Name</p>
        </div>
  
         <div class="chat-section">
             <div class="main-wrapper">
                 <div class="chat-content">
                     <div class="message">
                        <div class="message-row other-message">
                      
                        <div class="message-row other-message">
                            
                        </div>
                    </div>

                 </div>
    
                 <from class="msg-tex">
                     <input type="text" name="msg" id="msg"
                     placeholder="Type Massage Here... " autocomplete="off"/>
                     <button id="btn-send">
                         <i class="fas fa-paper-plane">send</i>
                     </button>
                </from>
             </div>

        </div>

    </div>
    </div>
    <script src="/socket.io/socket.io.js"></script>
    
    </div>
        )
    }
}
export default Chat;