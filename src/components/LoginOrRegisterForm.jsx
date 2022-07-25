import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

// import LogosGoogleIcon from "../assets/LogosGoogleIcon";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <div className="flex h-full bg-bcolor overflow-hidden">
      <div className="flex h-5/6 w-4/5 m-auto ">
        <div className="flex w-1/2 bg-primary rounded-l-xl">
          {/* <img src={require("../assets/book.jpg")} alt="book recipe" /> */}
        </div>
        <div className="flex flex-col w-1/2 bg-tertiary rounded-r-xl items-center">
          <div className="flex flex-col justify-center h-full w-3/4 ">
            {/* title start*/}
            <div className="flex flex-col h-2/5 justify-center">
              <h1 className="text-4xl font-bold text-primary mb-4 ">
                {loginOrRegister === "login" ? "Login Page" : "Register Page"}
              </h1>

              <p className="text-slate-500">
                Already have an account?
                <span className="text-primary font-bold"> Log In</span>
              </p>

              <div className="flex justify-between mt-5">
                <button className="bg-white p-2 rounded-md w-1/2 border border-slate-300">
                  {/* <LogosGoogleIcon /> */}
                  Sign Up With Google
                </button>
                <button className="bg-blue-600 text-slate-100 rounded-md p-2 w-1/2 ml-2 border-none">
                  Sign Up With Facebook
                </button>
              </div>
              <hr className="mt-10 border" />
            </div>
            {/* title end */}

            {/* eform start */}
            <div className="flex flex-col h-3/5">
              <h2 className="text-lg mb-2 text-slate-700">Email address</h2>
              <input
                type="email"
                name="email"
                id="email"
                value={credential.email}
                onChange={textFieldEmailOnChangeHandler}
                className="border p-2 rounded-md focus:outline-none"
              />
              <h2 className="text-lg mb-2 text-slate-700 mt-2">Password</h2>
              <input
                type="password"
                name="password"
                id="password"
                value={credential.password}
                onChange={textFieldPasswordOnChangeHandler}
                className="border p-2 rounded-md focus:outline-none"
              />
              {/* <input type="checkbox" name="" id="" /> <p></p> */}
              <div class="flex items-center mt-2 mb-2">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with
                  <span className="text-primary"> Terms of Services</span> and
                  <span className="text-primary"> Privacy Policy</span>
                </label>
              </div>
              <button
                onClick={buttonLoginOrRegisterOnClickHandler}
                className="bg-primary border rounded-xl p-3 text-slate-100 mt-4"
              >
                {loginOrRegister === "login" ? "Login" : "Register Account"}
              </button>
            </div>
            {/* form end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOrRegisterForm;
