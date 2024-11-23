import React from "react";
import "../index.css";
import asserts from "../assets/assests";
const HomePage = () => {
  return (
    <main className="h-[90vh] w-screen bg-black text-white flex items-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6">
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Hi, I’m
            <span className="text-blue-500"> Suthesh </span>.
          </h1>
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            A passionate{" "}
            <span className="text-blue-400 font-medium">web developer </span>
            focused on crafting user-centric and innovative web applications.
            Let’s collaborate to create something extraordinary.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
              Contact Me
            </button>
            <button className="px-6 py-2 bg-gray-700 text-gray-200 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300">
              My Portfolio
            </button>
          </div>
        </div>

        <div className="photo w-52 h-52  md:w-96 md:h-96 rounded-full flex items-center justify-center border-white  z-0">
          <img
            src={asserts.suthesh}
            alt="Suthesh Pravin"
            className="photo w-full h-full z-10 object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
