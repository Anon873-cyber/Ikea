import React from "react";
import { useForm } from "react-hook-form";
import api from "../../api/axios";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useSelector } from "react-redux";

function LoginForm() {
  const [success, setsuccess] = useState(false);
  const [submit, SetSubmit] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit function
  const onSubmit = (data) => {
    if (!data.email || !data.password) {
      setError("root", {
        message: "Email and Password are required",
      });
      return;
    }
    // api responce
    api
      .post(
        "/user/auth/login",
        data,
        {
          withCredentials: true,
        },
      )
      .then((responce) => {
        let userData = responce.data.data.user;
        setsuccess(true);
        dispatch(login({ status: true, userData }));
        navigate("/profile"); // naving the user to store
      })
      .catch((error) => {
        console.log(error.status); // returing 404
        if (error.status === 404) {
          setError("root", {
            message: "User not Found",
          });
        } else if (error.status === 401) {
          setError("root", {
            message: "Password is wrong",
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
          {errors?.root?.message || "Login successful"}
        </span>
      </div>

      <div className=" flex flex-col gap-2 max-w-[500px] border rounded-2xl border-white shadow-2xl p-5 m-auto mt-10">
        <div className="flex flex-col gap-3 items-center">
          <h2 className=" text-[32px] [font-family:var(--font-heading)] font-bold ">
            Login
          </h2>
          <p className="text-gray-500">
            Please login using account detail below
          </p>
        </div>
        <form
          className="flex flex-col mt-5 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-full focus:none p-2 border-2 outline-none text-[var(--color-text-secondary)]/60 text-opacity-15 font-family:[var(--font-body)] border-[var(--color-accent-light)]"
            {...register("email", {})}
            placeholder="Please Enter an Email"
          />

          <input
            className="w-full p-2 border-2 outline-none text-[var(--color-text-secondary)]/60 font-[var(--font-body)] border-[var(--color-accent-light)] focus:outline-none"
            type="password"
            {...register("password")}
            placeholder="Please enter a password"
          />

          <div className="flex justify-end">
            <a
              className="[font-family:var(--font-heading)] text-gray-400"
              href="/register"
            >
              Do not have an Account ?
            </a>
          </div>
          <button
            className="bg-[var(--color-primary)] text-white p-2 w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
