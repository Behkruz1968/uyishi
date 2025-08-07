import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white sticky top-0 left-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/">
          <img
            className="w-48 md:w-60"
            src="https://www.nickelfox.com/wp-content/uploads/2024/01/NFX-us-uk-aus-white-Logo-1.png"
            alt="Nickelfox Logo"
          />
        </a>
        <ul className="hidden md:flex space-x-8 font-medium text-sm uppercase p-{6px 0}">
          <li className="hover:text-red-700 cursor-pointer transition-colors"><NavLink  className={".sidebar__link"} to={"/about"}>About</NavLink></li>
          <li className="hover:text-red-700 cursor-pointer transition-colors">Services</li>
          <li className="hover:text-red-700 cursor-pointer transition-colors">Tech Stack</li>
          <li className="hover:text-red-700 cursor-pointer transition-colors">Industries</li>
          <li className="hover:text-red-700 cursor-pointer transition-colors">Success Stories</li>
          <li className="hover:text-red-700 cursor-pointer transition-colors">Careers</li>
          <li className="hover:text-red-700 cursor-pointer transition-colors">Blog</li>
          <li className="hover:text-red-700 cursor-pointer transition-colors">Contact</li>
        </ul>
        <button className="md:hidden flex flex-col justify-center items-center">
          <span className="bg-white block h-0.5 w-6 mb-1"></span>
          <span className="bg-white block h-0.5 w-6 mb-1"></span>
          <span className="bg-white block h-0.5 w-6"></span>
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
