import React, { useState } from "react";
import "./App.css";
import BurgerButton from "./BurgerButton";
import { Link } from "react-router-dom";

export default function Nav() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    // עדכון של המשתנה המקומי activeLink
    setActiveLink(linkId);
  };

  // פונקציה שמחזירה את ה-className בהתאם לסטייט
  const getLinkClassName = (linkId) => {
    return linkId === activeLink ? "color-yellow" : "hover:color-yellow";
  };
  return (
    <>
      <header className="sticky top-0  w-full flex justify-center z-[3]">
        <div className=" flex flex-row items-center justify-center py-6 space-x-6 w-4/5">
          <div className="w-3/4 hidden lg:flex justify-end">
            <ul className="flex text-right space-x-6">
              <li className="hover:color-yellow">
                <Link
                  to="/home"
                  onClick={() => handleLinkClick(1)}
                  className={getLinkClassName(1)}
                >
                  Home
                </Link>
              </li>
              <li className="hover:color-yellow">
                <Link
                  to="/about"
                  onClick={() => handleLinkClick(2)}
                  className={getLinkClassName(2)}
                >
                  About Us
                </Link>
              </li>
              <li className="hover:color-yellow">
                <Link
                  to="/managers"
                  onClick={() => handleLinkClick(3)}
                  className={getLinkClassName(3)}
                >
                  Managers
                </Link>
              </li>
              <li className="hover:color-yellow">
                <Link
                  to="/Mentors"
                  onClick={() => handleLinkClick(4)}
                  className={getLinkClassName(4)}
                >
                  Mentors
                </Link>
              </li>
              <li className="hover:color-yellow">

                <Link
                  to="/contactus"
                  onClick={() => handleLinkClick(5)}
                  className={getLinkClassName(5)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-1/4 flex justify-end items-end">
            <ul className="flex text-right space-x-6">
              <li className=" w-32 hover:color-yellow items-end">
                <a
                  href="#SignIn"
                  onClick={() => handleLinkClick(6)}
                  className={getLinkClassName(6)}
                >
                  Sign In
                </a>
              </li>
              <li className="color-yellow b-yellow rounded-md hover:text-neutral-50">
                <button className="btn "> Sign Up</button>
              </li>
            </ul>
          </div>
        </div>

        <BurgerButton />
      </header>
    </>
  );
}
