// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import CreateAccount from './component/createaccount';
import Login from './component/login';

function App() {
  // first name the prop(title) then 2nd name the function; we set false so it will not open the modal
  const [createAccount, setOpenCreate] = useState(false)
  const [login, setOpenLogin] = useState(false)

  return (
    <div className='container'>
      <div className="image-logo"></div>
          <section className="sidecontent">
          <h1>What's keeping you up?</h1>
          <h2>Write it here.</h2>
          
          <div className="button-option-landingpage">
              <button id="btnOption" className="click-btn" 
              onClick={() =>
              {setOpenCreate(true)}}>Create an account</button>
              <button id="btnOption" className="click-btn" 
              onClick={() =>
                {setOpenLogin(true)}}>Log in</button>
          </div>
          </section>

          {/* if true, it will call the function */}
          {createAccount && <CreateAccount exitModal={setOpenCreate}/>}
          {login && <Login exitModal={setOpenLogin}/>}

    </div>
  );
}

export default App;

//typeOf or type