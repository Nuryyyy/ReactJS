import React from "react";
import Modal from "./modal";

// import logo from './images/midnightwrite_4.svg';

function CreateAccount(){
    return (
         <div id="bg-modal" className="createaccount">
            <Modal />

              <form action='' className='createaccount'>
                <input type='text' placeholder='username' />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Password"/> 
                <button id="btnOption" class="click-btn" onClick="newuser()">Register</button>
              </form>
        </div>
    )
};

export default CreateAccount;
