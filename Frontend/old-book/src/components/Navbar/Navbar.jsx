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

  const mode = dark ? "Light Mode" : "Dark Mode";

  function modeToggle() {
    setDark(!dark);
  }

  function sidebarHandler() {
    setSidebar(!sidebar);
  }

  return (
    <nav
      className={`
        flex flex-col h-screen justify-between py-4 items-center 
        duration-500 backdrop-blur-md border-r border-gray-400 sticky top-0
        ${sidebar ? "w-20" : "w-52 bg-gray-200"}
      `}
    >
      {/* Header Section */}
      <div
        onClick={sidebarHandler}
        className={`flex items-center justify-around px-3 w-full cursor-pointer`}
      >
        {!sidebar && (
          <h1 className="font-semibold text-lg text-gray-700 transition-all duration-300">
            Book
          </h1>
        )}
        {sidebar ? (
          <GoSidebarExpand size={22} className="mx-auto hover:bg-gray-300" />
        ) : (
          <GoSidebarCollapse size={22} className="hover:bg-gray-300 " />
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {[
            { icon: <TfiHome size={20} />, label: "Home" },
            { icon: <LuLayoutDashboard size={20} />, label: "Dashboard" },
            { icon: <BiPurchaseTagAlt size={20} />, label: "Buy Book" },
            { icon: <LiaRupeeSignSolid size={20} />, label: "Sell Book" },
            { icon: <CiCircleInfo size={20} />, label: "About" },
          ].map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center ${
                sidebar ? "justify-center" : "justify-start pl-5"
              } gap-3 py-2 w-[90%] rounded-md cursor-pointer hover:bg-gray-300 transition-all`}
            >
              {item.icon}
              {!sidebar && (
                <span className="font-medium whitespace-nowrap">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle */}
      <div
        className={`w-[90%] mx-auto mb-3 flex items-center ${
          sidebar ? "justify-center" : "justify-start pl-3"
        } gap-3 p-2 cursor-pointer hover:bg-gray-300 rounded-md transition-all`}
        onClick={modeToggle}
      >
        {dark ? <MdOutlineLightMode size={20} /> : <CiDark size={20} />}
        {!sidebar && <span className="font-medium">{mode}</span>}
      </div>

      {/* Auth Buttons */}
      <div className="flex flex-col gap-2 w-[90%] mb-2">
        <button
          className={`flex items-center ${
            sidebar ? "justify-center" : "justify-start pl-3"
          } gap-3 h-10 rounded-md hover:bg-gray-300 transition-all`}
        >
          <IoLogInOutline size={20} />
          {!sidebar && <span className="font-medium">Login</span>}
        </button>
        <button
          className={`flex items-center ${
            sidebar ? "justify-center" : "justify-start pl-3"
          } gap-3 h-10 rounded-md hover:bg-gray-300 transition-all`}
        >
          <MdOutlinePersonAdd size={20} />
          {!sidebar && <span className="font-medium">Sign Up</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
