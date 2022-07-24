import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  // di sini kita akan menggunakan hooks useAuthState
  // useAuthState ini menerima 2 parameter:
  // parameter 1: auth (yang kita buat dan export dari firebase)
  // parameter 2 (optional): options (dalam bentuk object)
  //    digunakan apabila ingin menggunakan hooks dengan lebih detail (melihat perubahan user)
  //    (Pada pembelajaran ini tidak digunakan)

  // Mengembalikan 3 data (dalam array)
  // user: akan mengembalikan auth.User apabila ada yang log in, dan null bila tidak ada
  // loading: boolean yang digunakan sebagai indikator apakah firebasenya sedang menunggu login
  // error: bila ada error yang diberikan
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
    // console.log("Login");
    // navigate("/");

    // Kita di sini tidak menggunakan navigate ke login lagi,
    // karena pada firebase, ketika selesai login,
    // maka auth statenya akan otomatis berubah (hooks useAuthState, data user)
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    // console.log("Register");
    // navigate("/login");

    // Kita di sini tidak menggunakan navigate ke login lagi, karena pada Firebase
    // Ketika selesai register akan otomatis login juga
    // dan auth statenya akan otomatis berubah (hooks useAuthState, data user)
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  // Lalu sekarang bagaimana kita track orang yang sedang login, dan apabila ada yang login
  // kita pindahkan ke halaman utama?

  // Kita gunakan.... useEffect !
  useEffect(
    () => {
      // Nah di sini mungkin kita bisa modifikasi / menggunakan
      // isLoading sebagai logic untuk menampilkan loading screen
      // (pada pembelajaran ini loading screen tidak dibuat)
      if (isLoading) {
        // Tampilkan loading screen (bila ada)
        return;
      }

      // Lalu apabila usernya ditemukan (ada / tidak null)
      // Maka akan kita navigasikan ke halaman HomePage
      if (user) {
        navigate("/");
      }
    },
    // Sekarang dependency kita tergantung pada user dan isLoading dari useAuthState
    [user, isLoading, navigate]
  );

  return (
    <div className="flex h-full bg-bcolor">
      <div className="flex bg-primary h-4/6 w-4/5 m-auto">
        <div className="flex w-1/2 bg-secondary">
          <img src={require("../assets/book.jpg")} alt="book recipe" />
        </div>
        <div className="flex flex-col w-1/2 justify-center p-10">
          <h1>
            {loginOrRegister === "login" ? "Login Page" : "Register Page"}
          </h1>
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            id="email"
            value={credential.email}
            onChange={textFieldEmailOnChangeHandler}
            className="border"
          />
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            id="password"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
            className="border"
          />
          <input type="button" value="" />
          <button
            onClick={buttonLoginOrRegisterOnClickHandler}
            className="bg-primary border border-radius-xl"
          >
            {loginOrRegister === "login" ? "Login" : "Register Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginOrRegisterForm;
