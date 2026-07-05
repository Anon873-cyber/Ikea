import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";

function SignUpForm() {
  const [success, setsuccess] = useState(false);
  let navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit function
  const onSubmit = (data) => {
    if (!data.email || !data.password || !data.username) {
      setError("root", {
        message: "All fields are required",
      });
      return;
    }
    // api responce
    api
      .post("/user/auth/register", data)
      .then((responce) => {
        console.log(responce);
        setsuccess(true);
        navigate("/login"); // naving the user to login route
      })
      .catch((error) => {
        if (error.status === 401) {
          setError("root", {
            message: "username already exists",
          });
        } else {
          setError("root", {
            message: "Something went wrong",
          });
        }
      });
  };

  return (
    <div>
      <div
        className={`flex shadow-2xl items-center mt-10 max-w-[400px] items-center m-auto justify-center gap-2 text-white px-4 py-3 rounded-lg shadow-md font-medium  ${errors?.root ? "visible  bg-red-500" : "invisible"}   ${success ? "visible bg-green-500" : "invisible"}`}
      >
        <MdErrorOutline size={22} />
        <span className="[font-family:var(--font-heading)] font-bold">
          {errors?.root?.message || "SignUp successful"}
        </span>
      </div>
      <div className=" flex flex-col gap-2 max-w-[500px] border rounded-2xl border-white shadow-2xl p-5 m-auto mt-25">
        <div className="flex flex-col gap-3 items-center">
          <h2 className=" text-[32px] [font-family:var(--font-heading)] font-bold ">
            Sign Up
          </h2>
          <p className="text-gray-500">
            Please Sign up using account detail below
          </p>
        </div>
        <form
          className="flex flex-col mt-5 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="w-full focus:none p-2 border-2 outline-none text-[var(--color-text-secondary)]/60 text-opacity-15 font-family:[var(--font-body)] border-[var(--color-accent-light)]"
            {...register("username", {})}
            placeholder="Please Enter an username"
          />

          <input
            type="email"
            className="w-full focus:none p-2 border-2 outline-none text-[var(--color-text-secondary)]/60 text-opacity-15 font-family:[var(--font-body)] border-[var(--color-accent-light)]"
            {...register("email", {})}
            placeholder="Please Enter an Email"
          />

          <input
            className="w-full focus:none p-2 border-2 outline-none text-[var(--color-text-secondary)]/60 text-opacity-15 font-family:[var(--font-body)] border-[var(--color-accent-light)]"
            type="password"
            {...register("password", {})}
            placeholder="Please enter a password"
          />

          <div  className="flex justify-end">
            <a  className="[font-family:var(--font-heading)] text-gray-400" href="/login">Already have an account ?</a>
          </div>
          <button
            className="bg-[var(--color-primary)] text-white p-2 w-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
