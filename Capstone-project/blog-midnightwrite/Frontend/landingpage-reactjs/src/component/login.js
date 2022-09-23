import React from "react";
import Modal from "./modal";

function Login() {
    return(
       <div id="bg-modal" className="createaccount">
            <Modal />
            <form action="">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button id="btnOption" class="click-btn" onclick="newuser()">Submit</button>
            </form>
            <a href="">Forgot password?</a>
        </div>
    )
}
export default Login;