import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Flood Hazards", path: "/hazards" },
  { name: "Hydrology Maps", path: "/hydrology" },
  { name: "Flood Indicators", path: "/indicators" },
  { name: "Topographic Maps", path: "/topography" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav   className="w-full relative z-50 font-sans shadow-sm">
      {/* Top Section */}
      <div className="bg-white  backdrop-blur-md py-2 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-gray-100 shadow-sm relative z-20">
        <div className="flex items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center focus:outline-none rounded group z-10">
            <img src={logo} alt="Flood Risks Logo" className="h-26 w-auto object-contain origin-bottom transition-transform duration-200 group-hover:scale-105" />
          </NavLink>
        </div>
        
        {/* Mobile Menu Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Section - Desktop Navigation Menu via Grid */}
      <div className="hidden md:block bg-linear-to-r from-slate-900 to-indigo-950 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex w-full justify-evenly items-center h-16 px-2 lg:px-4">
            {navItems.map((item) => (
              <li key={item.name} className="flex justify-center">
                <NavLink
                  to={item.path}  
                  className={({ isActive }) =>
                    `relative px-4 py-2 w-full text-center text-lg font-medium transition-colors duration-300 ease-in-out border-b-2 rounded-t-sm ${
                      isActive
                        ? "text-white border-blue-400 bg-white/5"
                        : "text-slate-300 border-transparent hover:text-white hover:border-slate-500 hover:bg-white/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu via Grid */}
      <div
        className={`md:hidden absolute w-full left-0 bg-slate-900 shadow-xl border-t border-slate-800 transition-all duration-300 ease-in-out origin-top overflow-hidden z-10 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8">
          <ul className="grid grid-cols-1 gap-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-center text-md font-medium transition-colors duration-200 ease-in-out rounded-lg border ${
                      isActive
                        ? "text-white bg-blue-500/10 border-blue-500/30"
                        : "text-slate-300 border-transparent hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
