import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { logout } from "../../firebase";

function Header() {
  let navRef = useRef();
  let currentLocation = useLocation();
  let [active, setActive] = useState(
    currentLocation.pathname.replace("/", "") || "home"
  );
  let [logoutShow, setLogoutShow] = useState(false);

  useEffect(() => {
    let location = currentLocation.pathname.replace("/", "");
    setActive(location || "home");
  }, []);

  let logouting = () => {
    setLogoutShow((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);
  return (
    <div
      ref={navRef}
      className="w-full px-20 h-24 mx-auto flex items-center justify-between fixed z-40 transition-all duration-500 ease-linear"
    >
      <div className="w-[60%] h-full flex items-center justify-start gap-24">
        <img src={Logo} alt="" className="w-[140px]" />
        <div className="flex items-center justify-start text-white gap-5 regular text-base">
          <Link to={"/"}>
            <h1
              className={`cursor-pointer ${
                active === "home" ? "active-color" : "unactive-color "
              }`}
              onClick={() => {
                setActive("home");
              }}
            >
              Home
            </h1>
          </Link>
          <Link to={"/tv-programes"}>
            <h1
              className={`cursor-pointer ${
                active === "tv-programes" ? "active-color" : "unactive-color"
              }`}
              onClick={() => {
                setActive("tv-programes");
              }}
            >
              TV Programes
            </h1>
          </Link>
          <Link to={"/films"}>
            <h1
              className={`cursor-pointer ${
                active === "films" ? "active-color" : "unactive-color"
              }`}
              onClick={() => {
                setActive("films");
              }}
            >
              Films
            </h1>
          </Link>
          <Link to={"/originals"}>
            <h1
              className={`cursor-pointer ${
                active === "original" ? "active-color" : "unactive-color"
              }`}
              onClick={() => {
                setActive("original");
              }}
            >
              Originals
            </h1>
          </Link>
          <Link to={"/recently-added"}>
            <h1
              className={`cursor-pointer ${
                active === "recently-added" ? "active-color" : "unactive-color"
              }`}
              onClick={() => {
                setActive("recently-added");
              }}
            >
              Recently Added
            </h1>
          </Link>
          <Link to={"list"}>
            <h1
              className={`cursor-pointer ${
                active === "list" ? "active-color" : "unactive-color"
              }`}
              onClick={() => {
                setActive("list");
              }}
            >
              List
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-7">
        <img src={search} alt="" className="w-[23px] cursor-pointer" />
        <img src={bell} alt="" className="w-[23px] cursor-pointer" />
        <div
          className="flex items-center justify-center gap-3 cursor-pointer hoverEffect"
          onClick={logouting}
        >
          <img src={profile} alt="" />
          <img src={caret} alt="" />
          {logoutShow && (
            <div className="w-48 border px-3 py-1 bg-black rounded-sm absolute top-20 right-20 z-50 logout">
              <Link to={"/login"}>
                <h1
                  className="flex items-center justify-between underline"
                  onClick={logout}
                >
                  Logout <MdKeyboardArrowRight />
                </h1>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
