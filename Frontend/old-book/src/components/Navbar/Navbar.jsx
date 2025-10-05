import { useState } from "react";
import { FaBook } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { IoLogInOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const [sidebar, setSidebar] = useState(true);
    
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
                flex flex-col h-163 justify-between pt-4 pb-4 items-center 
                duration-500 rounded-xl bg-blue-300 flex-wrap sticky top-5 left-4 mt-5 mb-5
                
                ${sidebar ? "w-16" : "w-48"}
            `}
        >
            {/* Header Section */}
            <div className="w-full px-2">
                <div 
                    className="duration-500 flex justify-between items-center cursor-pointer p-2 hover:bg-blue-400 rounded-lg"
                    onClick={sidebarHandler}
                >
                    {!sidebar && (
                        <div className="flex flex-col items-center">
                            <span className="text-xl font-bold whitespace-nowrap font-serif  tracking-wider text-blue-800 drop-shadow-sm">
                                Old Book
                            </span>
                            <div className="w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 mt-1 rounded-full"></div>
                        </div>
                    )}
                    {sidebar ? (
                        <GoSidebarCollapse size={24} />
                    ) : (
                        <GoSidebarExpand size={24} />
                    )}
                </div>
            </div>

            {/* Navigation Links */}
            <div className="w-full flex-1 flex justify-center items-center">
                <ul className="flex flex-col justify-center items-start gap-6 w-full px-4">
                    <li className="flex flex-row justify-start items-center w-full gap-3 cursor-pointer hover:bg-blue-400 p-2 rounded-lg transition-colors">
                        <IoMdHome size={20} />
                        {!sidebar && <span className="font-medium">Home</span>}
                    </li>
                    <li className="flex flex-row justify-start items-center w-full gap-3 cursor-pointer hover:bg-blue-400 p-2 rounded-lg transition-colors">
                        <MdDashboard size={20} />
                        {!sidebar && <span className="font-medium">Dashboard</span>}
                    </li>
                    <li className="flex flex-row justify-start items-center w-full gap-3 cursor-pointer hover:bg-blue-400 p-2 rounded-lg transition-colors">
                        <BiPurchaseTagAlt size={20} />
                        {!sidebar && <span className="font-medium">Buy Book</span>}
                    </li>
                    <li className="flex flex-row justify-start items-center w-full gap-3 cursor-pointer hover:bg-blue-400 p-2 rounded-lg transition-colors">
                        <FaBook size={20} />
                        {!sidebar && <span className="font-medium">Sell Book</span>}
                    </li>
                    <li className="flex flex-row justify-start items-center w-full gap-3 cursor-pointer hover:bg-blue-400 p-2 rounded-lg transition-colors">
                        <FcAbout size={20} />
                        {!sidebar && <span className="font-medium">About</span>}
                    </li>
                </ul>
            </div>

            {/* Theme Toggle */}
            <div className="w-full px-2 mb-4">
                <div 
                    className="flex justify-center items-center cursor-pointer p-2 hover:bg-blue-400 rounded-lg transition-colors"
                    onClick={modeToggle}
                >
                    <div className="flex items-center gap-3">
                        {dark ? (
                            <MdOutlineLightMode size={20} />
                        ) : (
                            <CiDark size={20} />
                        )}
                        {!sidebar && <span className="whitespace-nowrap font-medium">{mode}</span>}
                    </div>
                </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex flex-col gap-2 w-full px-2">
                <button className="h-10 flex flex-row justify-center items-center gap-3 hover:bg-blue-400 rounded-lg transition-colors w-full">
                    <IoLogInOutline size={20} />
                    {!sidebar && <span className="font-medium">Login</span>}
                </button>
                <button className="h-10 flex flex-row justify-center items-center gap-3 hover:bg-blue-400 rounded-lg transition-colors w-full">
                    <IoMdPersonAdd size={20} />
                    {!sidebar && <span className="font-medium">Sign Up</span>}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;