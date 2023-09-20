import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const user = localStorage.getItem("user");
  return (
    <nav className="bg-white p-4 md:flex hidden">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="logo" />

        <div className="text-blue-500 text-sm">
          {user ? `Logged in as: ${user}` : "Not logged in"}
        </div>

        <ul className="space-x-4 flex ">
          <li className="text-blue-500 hover:underline">Home</li>
          <li className="text-blue-500 hover:underline">About</li>
          <li className="text-blue-500 hover:underline">contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
