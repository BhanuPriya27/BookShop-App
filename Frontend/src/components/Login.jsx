import React from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios'
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
      email: data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Logged in Successfully..")
        document.getElementById("my_modal_3").close()
        setTimeout(()=>{
          window.location.reload()
          localStorage.setItem("Users", JSON.stringify(res.data.user))

        }, 1000)
      }
    })
    .catch((err)=>{
      if(err.response){
        console.log(err);
        toast.error("Error: "+ err.response.data.message);
        setTimeout(() => {}, 2000);
      }
    })
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className={`w-80 px-3 py-1 border rounded-md outline-none ${
                  errors.email ? "border-red-600" : "border-gray-300"
                }`}
                {...register("email", { required: "Email is required" })}
              /> <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  {errors.email.message}
                </span>
              )}
              <br />

              {/* Password */}
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className={`w-80 px-3 py-1 border rounded-md outline-none ${
                  errors.password ? "border-red-600" : "border-gray-300"
                }`}
                {...register("password", { required: "Password is required" })}
              /> <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  {errors.password.message}
                </span>
              )}
              <br />
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-blue-300 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
 
export default Login;
