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
      <div className="basis-1/4 flex items-center">
        <NotoPotOfFood className="text-4xl mr-2" />
        <p className="text-xl font-bold text-primary">Food Recipe</p>
      </div>
      <div className="basis-1/2">
        <ul className="flex justify-evenly">
          <li>Home</li>
          <li>About</li>
          <li>Recipe</li>
        </ul>
      </div>
      <div className="flex basis-1/4 justify-end">
        <button
          onClick={buttonLogoutOnClickHandler}
          className="flex items-center"
        >
          <MaterialSymbolsLogoutRounded className="text-xl mr-1" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
