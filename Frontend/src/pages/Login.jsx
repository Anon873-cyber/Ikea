import React from "react";
import LoginForm from "../components/Forms/LoginForm";
import brands from "/img/brand.png";

function Login() {
  return (
    <div className="p-2 w-full justify-center items-stretch">
      <LoginForm />
      <div className="max-w-[904px]  m-auto mt-15">
        <img src="/img/brand.png" alt="our brands" />
      </div>
    </div>
  );
}

export default Login;
