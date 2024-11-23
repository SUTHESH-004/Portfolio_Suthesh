import React from "react";
import "../index.css";
import asserts from "../assets/assests";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar  h-[10vh] w-[100vw] items-center justify-center flex text-white/90 pb-[1px] mx-auto ">
        <div className=" bg-black flex-[1] flex h-[100%] items-center justify-center ">
          <div className="h-12 ">
            <img className="h-[100%] w-[100%]" src={asserts.dino} alt="" />
          </div>
        </div>
        <div className=" bg-black flex h-[100%] flex-[2] justify-center items-center space-x-4 md:space-x-16 text-[10px] font-bold text-white/85 tracking-widest pr-2">
          <NavLink to="/">ABOUT</NavLink>
          <NavLink to="/service">WORKS</NavLink>
          <NavLink to="/experience">EXPERIENCE</NavLink>
          <NavLink to="/about">CONTACT</NavLink>
        </div>
        <div className="pl-2 bg-black flex h-[100%]  flex-[1] justify-center items-center border-l-[0.1px] border-white/10">
          Instagram
        </div>
      </div>
    </>
  );
};

export default Navbar;
