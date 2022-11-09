import React, { useRef ,useContext  } from "react";
import {UserContext}  from "./context/userContext";
import { auth } from "./firebase";

const SignIn = () => {
  const emailRef = useRef();
  const psdRef = useRef();

  const { signInUser, forgotPassword ,acv} = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    
    if (email) {
    console.log(email);
        forgotPassword(email).then(() => {
            emailRef.current.value = "";

        });}
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="input-elements">
        <input type="email" placeholder="Email" ref={emailRef} /> <br></br>
        <input
          type="text"
          placeholder="Password"
          ref={psdRef}
          style={{ marginTop: "20px" }}
        />
        <br></br>
        <button type="submit" style={{ marginTop: "20px" }} className="login-btn">
          Login
        </button>
        <p onClick={forgotPasswordHandler} style={{ cursor: "pointer" }}>
          Forgot Password?
        </p>
      </form>
    </div>
  );
};

export default SignIn;


