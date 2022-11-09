import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";

const Auth = () => {
  const [index, setIndex] = useState(false);

  const toggleIndex = () => {
    setIndex((preState) => !preState);
  };

  return (
    <div className="container">
      {!index ? <SignIn /> : <SignUp />}
      <p onClick={toggleIndex} style={{color:"rgb(94, 94, 96)",cursor:"pointer"}}>{!index ? "Don't have an acoount? Register!" : "Alreday have an account?"} </p>
    </div>
  );
};

export default Auth;
