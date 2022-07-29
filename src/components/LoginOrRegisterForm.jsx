import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import LogosGoogleIcon from "../assets/LogosGoogleIcon";
import SimpleIconsFacebook from "../assets/SimpleIconsFacebook";
import CarbonPassword from "../assets/CarbonPassword";
import IcBaselineEmail from "../assets/IcBaselineEmail";

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
        <div className="flex w-1/2 bg-white rounded-l-xl sm:hidden">
          <img
            src={require("../assets/recipe_book.jpg")}
            alt="book recipe"
            className="p-4"
          />
        </div>
        <div className="flex flex-col w-1/2 bg-tertiary rounded-r-xl items-center sm:w-full sm:rounded-lg">
          <div className="flex flex-col h-full w-3/4 justify-center">
            {/* title start*/}
            <div className="flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-primary mb-4 ">
                {loginOrRegister === "login" ? "Login Page" : "Register Page"}
              </h1>

              <div className="text-slate-500">
                {loginOrRegister === "login" ? (
                  <p>
                    Dont have an account?{" "}
                    <Link to="/register" className="text-primary font-bold">
                      Register
                    </Link>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-bold">
                      Login
                    </Link>
                  </p>
                )}
              </div>

              <div className="flex justify-between mt-5">
                <button className="bg-white p-2 rounded-xl w-1/2 border border-slate-300 sm:text-sm">
                  <div className="flex justify-center align-middle">
                    <LogosGoogleIcon className="mr-2 sm:mr-0 sm:ml-1" />
                    {loginOrRegister === "login"
                      ? "Sign in with Google"
                      : "Sign up with Google"}
                  </div>
                </button>
                <button className="bg-blue-600 text-slate-100 rounded-xl p-2 w-1/2 ml-2 border-none sm:text-sm">
                  <div className="flex justify-center align-middle">
                    <SimpleIconsFacebook className="mr-2 sm:mr-0 sm:ml-1" />
                    {loginOrRegister === "login"
                      ? "Sign in with Fb"
                      : "Sign up with Fb"}
                  </div>
                </button>
              </div>
              <hr className="mt-5 mb-5 border" />
            </div>
            {/* title end */}

            {/* eform start */}
            <div className="flex flex-col ">
              <h2 className="text-lg mb-2 text-slate-700 sm:text-base">
                Email address
              </h2>
              <div className="flex bg-white rounded-xl">
                <IcBaselineEmail className="ml-3 text-slate-500 text-xl" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={credential.email}
                  onChange={textFieldEmailOnChangeHandler}
                  className="p-2 focus:outline-none w-full text-slate-800"
                />
              </div>
              <h2 className="text-lg mb-2 text-slate-700 mt-2 sm:text-base">
                Password
              </h2>
              <div className="flex bg-white rounded-xl mb-2">
                <CarbonPassword className="ml-3 text-slate-500 text-xl" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={credential.password}
                  onChange={textFieldPasswordOnChangeHandler}
                  className="p-2 focus:outline-none text-slate-900 w-full"
                />
              </div>

              {loginOrRegister === "login" ? (
                ""
              ) : (
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
              )}

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
