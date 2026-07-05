import React from "react";
import SignUpForm from "../components/Forms/SignUpForm";
import brands from "/img/brand.png";

function SignUp() {
  return (
    <div className="p-2 w-full justify-center items-stretch">
      <SignUpForm />
      <div className="max-w-[904px]  m-auto mt-15">
        <img src="/img/brand.png" alt="our brands" />
      </div>
    </div>
  );
}

export default SignUp;
