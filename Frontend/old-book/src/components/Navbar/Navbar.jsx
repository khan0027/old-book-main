import { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark, CiCircleInfo } from "react-icons/ci";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { TfiHome } from "react-icons/tfi";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";
import { MdOutlinePersonAdd } from "react-icons/md";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const mode = dark ? "Light Mode" : "Dark Mode";

  function modeToggle() {
    setDark(!dark);
  }

  function sidebarHandler() {
    setSidebar(!sidebar);
  }

  const navItems = [
    { icon: <TfiHome size={20} />, label: "Home" },
    { icon: <LuLayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <BiPurchaseTagAlt size={20} />, label: "Buy Book" },
    { icon: <LiaRupeeSignSolid size={20} />, label: "Sell Book" },
    { icon: <CiCircleInfo size={20} />, label: "About" },
  ];

  const authItems = [
    { icon: <IoLogInOutline size={20} />, label: "Login" },
    { icon: <MdOutlinePersonAdd size={20} />, label: "Sign Up" },
  ];

  return (
    <nav
      className={`
        flex flex-col h-screen justify-between py-4 items-center 
        duration-500 backdrop-blur-md border-r border-gray-400 sticky top-0
        ${sidebar ? "w-20 " : "w-52 backdrop-blur-md  "}
      `}
    >
      {/* Header Section */}
      <div
        onClick={sidebarHandler}
        className={`flex items-center justify-around w-full cursor-pointer`}
      >
        {!sidebar && (
          <h1 className="font-semibold text-lg text-gray-700 transition-all duration-300">
            Book
          </h1>
        )}
        {sidebar ? (
          <GoSidebarExpand size={22} />
        ) : (
          <GoSidebarCollapse size={22} />
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <ul className="flex flex-col justify-center items-center gap-7 w-full">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className={`relative flex items-center ${
                sidebar ? "justify-center" : "justify-start pl-5"
              } gap-3 py-2 w-[90%] rounded-md cursor-pointer hover:bg-gray-300 transition-all`}
              onMouseEnter={() => sidebar && setHoveredItem(idx)}
              onMouseLeave={() => sidebar && setHoveredItem(null)}
            >
              {item.icon}
              {!sidebar && (
                <span className="font-medium whitespace-nowrap">{item.label}</span>
              )}
              
              {/* Tooltip for collapsed sidebar */}
              {sidebar && hoveredItem === idx && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-50 whitespace-nowrap">
                  {item.label}
                  {/* Tooltip arrow */}
                  <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-l-0 border-r-gray-800 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle */}
      <div
        className={`relative w-[90%] mx-auto mb-3 flex items-center ${
          sidebar ? "justify-center" : "justify-start pl-3"
        } gap-3 p-2 cursor-pointer hover:bg-gray-300 rounded-md transition-all`}
        onClick={modeToggle}
        onMouseEnter={() => sidebar && setHoveredItem('theme')}
        onMouseLeave={() => sidebar && setHoveredItem(null)}
      >
        {dark ? <MdOutlineLightMode size={20} /> : <CiDark size={20} />}
        {!sidebar && <span className="font-medium">{mode}</span>}
        
        {/* Tooltip for theme toggle */}
        {sidebar && hoveredItem === 'theme' && (
          <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-50 whitespace-nowrap">
            {mode}
            <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-l-0 border-r-gray-800 border-t-transparent border-b-transparent"></div>
          </div>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="flex flex-col gap-2 w-[90%] mb-2">
        {authItems.map((item, idx) => (
          <button
            key={idx}
            className={`relative flex items-center ${
              sidebar ? "justify-center" : "justify-start pl-3"
            } gap-3 h-10 rounded-md hover:bg-gray-300 transition-all`}
            onMouseEnter={() => sidebar && setHoveredItem(`auth-${idx}`)}
            onMouseLeave={() => sidebar && setHoveredItem(null)}
          >
            {item.icon}
            {!sidebar && <span className="font-medium">{item.label}</span>}
            
            {/* Tooltip for auth buttons */}
            {sidebar && hoveredItem === `auth-${idx}` && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-50 whitespace-nowrap">
                {item.label}
                <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-0 h-0 border-t-2 border-b-2 border-r-4 border-l-0 border-r-gray-800 border-t-transparent border-b-transparent"></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;