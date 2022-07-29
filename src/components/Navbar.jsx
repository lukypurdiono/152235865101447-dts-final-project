import React from "react";
import { useNavigate } from "react-router-dom";
import { keluarDariApps } from "../authentication/firebase";

import { NotoPotOfFood } from "../assets/NotoPotOfFood";

import { MaterialSymbolsLogoutRounded } from "../assets/MaterialSymbolsLogoutRounded";

const Navbar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await keluarDariApps();
    navigate("/login");
  };

  return (
    <div className="flex bg-bcolor p-2 items-center align-middle">
      <div className="basis-1/4 flex items-center ml-12">
        <NotoPotOfFood className="text-4xl mr-2" />
        <p className="text-xl font-bold text-primary">Food Recipe</p>
      </div>
      <div className="basis-1/2">
        <ul className="flex justify-evenly text-xl font-bold text-slate-800">
          <li className="hover:bg-primary hover:font-normal hover:p-1 hover:rounded-xl hover:text-slate-100 hover:cursor-pointer">
            Home
          </li>
          <li className="hover:bg-primary hover:font-normal hover:p-1 hover:rounded-xl hover:text-slate-100 hover:cursor-pointer">
            About
          </li>
          <li className="hover:bg-primary hover:font-normal hover:p-1 hover:rounded-xl hover:text-slate-100 hover:cursor-pointer">
            Recipe
          </li>
        </ul>
      </div>
      <div className="flex basis-1/4 justify-end mr-6">
        <button
          onClick={buttonLogoutOnClickHandler}
          className="flex items-center hover:bg-primary hover:font-normal hover:p-1 hover:rounded-xl hover:text-slate-100 hover:cursor-pointer"
        >
          <MaterialSymbolsLogoutRounded className="text-xl mr-1" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
