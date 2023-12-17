import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, path: "/managers", text: "managers" },
  { id: 2, path: "/managers/participants", text: "participants" },
  { id: 3, path: "/managers/mentors", text: "mentors" },
];

export default function ManagerLayout() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  const getLinkClassName = (linkId) => {
    return linkId === activeLink ? "color-yellow" : "hover:color-yellow";
  };

  return (
    <div className='flex flex-row w-full h-[200px] space-x-4 '>
      {links.map((link) => (
        <div
          key={link.id}
          className={`flex justify-center items-center w-1/3 lg:h-36 h-20 text-white hover:text-slate-950 bg-slate-950 hover:bg-amber-400 rounded-lg border border-indigo-950 cursor-pointer`}
        >
          <Link
            to={link.path}
            onClick={() => handleLinkClick(link.id)}
            className={`q${getLinkClassName(link.id)}`}
          >
            <button className='w-full h-full'>
              <h1>{link.text}</h1>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}



