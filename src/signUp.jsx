import React, { useRef,useContext } from "react";
import { UserContext } from "./context/userContext";

const SignUp = () => {
  const emailRef = useRef();
  const nameRef  = useRef();
  const psdRef = useRef();

    const {registerUser} = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;  
    if(email&&name&&password) registerUser(email,name,password);
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={onSubmit} className="input-elements">
        <input type="email" placeholder="Email" ref={emailRef}/> <br></br>
        <input
          type="text"
          placeholder="Name"
          ref={nameRef}
          style={{ marginTop: "20px" }}
        />
        <input
          type="text"
          placeholder="Password"
          ref={psdRef}
          style={{ marginTop: "20px" }}
        />
        <br></br>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
