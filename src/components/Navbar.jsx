import { BsMoonFill, BsSunFill } from "react-icons/bs";

import {  Link } from "react-router-dom";

import { useState, useEffect } from "react";
;

const themes = {
    valentine: 'valentine',
    aqua: 'aqua',
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme" || themes.valentine);
};

function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme = () => {
    const { valentine, aqua } = themes;
    const newTheme = theme === aqua ? valentine : aqua;
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar mx-auto max-w-6xl px-8 ">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn  btn-primary text-3xl items-center"
          >
            Crud App
          </Link>
          
        </div>
        <div className="navbar-center">
          
        </div>
        <div className="navbar-end flex gap-5">
          <Link to='/create' className="btn btn-neutral">
            Add new user
          </Link>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
