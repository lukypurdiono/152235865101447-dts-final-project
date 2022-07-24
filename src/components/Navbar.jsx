import React from "react";
import { useNavigate } from "react-router-dom";
import { keluarDariApps } from "../authentication/firebase";

const Navbar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await keluarDariApps();
    navigate("/login");
  };

  return (
    <div className="flex bg-tertiary p-4 items-center">
      <div className="basis-1/4">
        <p>Food Recipe</p>
      </div>
      <div className="basis-1/2">
        <ul className="flex justify-evenly">
          <li>Home</li>
          <li>About</li>
          <li>Recipe</li>
        </ul>
      </div>
      <div className="flex basis-1/4 justify-end">
        <button onClick={buttonLogoutOnClickHandler} className="bg-primary">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
