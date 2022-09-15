import React, { Component } from "react";

const Login = (props) => {
  return (
    <button className="btn login" onClick={() => props.onClick()}>
      Login
    </button>
  );
};

export default Login;
