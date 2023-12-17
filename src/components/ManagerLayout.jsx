import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; //?
import { Outlet } from "react-router-dom";
import { Children } from "react";


export default function ManagerLayout() {
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
    <div className="bg-white">ManagerLayout</div>
    <header className="sticky top-0  w-full flex justify-center z-[3]">
        <div className=" flex flex-row items-center justify-center py-6 space-x-6 w-4/5">
          <div className="w-3/4 hidden lg:flex justify-end">
            <ul className="flex text-right space-x-6">
              <li className="hover:color-yellow">
                <Link
                  to="/managers/managers"
                  onClick={() => handleLinkClick(1)}
                  className={getLinkClassName(1)}
                >
                  MANAGERS
                </Link>
              </li>
              <li className="hover:color-yellow">
                <Link
                  to="/managers/mentors"
                  onClick={() => handleLinkClick(2)}
                  className={getLinkClassName(2)}
                >
                  MENTORS
                </Link>
              </li>
              <li className="hover:color-yellow">
                <Link
                  to="/managers/marketing"
                  onClick={() => handleLinkClick(3)}
                  className={getLinkClassName(3)}
                >
                  MARKETING
                </Link>
              </li>
              
            </ul>
          </div>
          </div>

          </header>
          {/* <Outlet /> */}

     </>
  )
}
