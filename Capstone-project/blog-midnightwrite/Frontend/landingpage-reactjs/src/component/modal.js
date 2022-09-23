import React from "react";
import logo from './images/midnightwrite_4.svg';

function Modal({exitModal}) {

    // const modalHandler = () => {
    //     setOpenCreate(!isOpen)
    // }
    return(
        <div id="bg-modal" className="createaccount">
        <div className='modal-contents'>
          {/* <div className='close'>+</div> */}
          <button className="close" 
          onClick={() => {exitModal(false)}}>X</button>
          <img className='logo' src={logo} alt='midnightwrite'></img>
        </div>
        </div>
    )
}

export default Modal;

//close does not work yet
//closeModal={() => setModal(False)}
//(!login)
