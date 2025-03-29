import React from "react";
import { useContext, useEffect, useState } from "react";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { currentUser } from "../data/UserData.js";
import { collections } from "../data/CollectionsData.js";
import { AuthContext } from "../context/authContext.jsx";

const Navbar = ({ setIsLoading }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full rounded-t-none h-[60px] ${
        isScrolled ? "bg-white shadow-md sticky" : "bg-transparent"
      } text-white flex justify-center items-center  top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-200`}
    >
      <div className="w-full max-w-screen-xl h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-semibold text-xl flex items-center">
          <span className={`${isScrolled && "text-black"}`}>The</span>
          <span className="text-l -mr-2 text-green-400">{">"}</span>
          <span className="text-l text-green-400">{"_"}</span>{" "}
          <span
            className={`text-s ${
              isScrolled ? "text-black" : "font-light"
            } ml-1 tracking-widest`}
          >
            BASS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-x-14">
          {collections.map((category) => (
            <Link
              key={category.id}
              to={`/${category.name}`}
              className={`${
                isScrolled ? "text-black" : "text-gray-100"
              } hover:text-red-300 hover:border-b-2 border-transparent p-2 hover:border-red-300 transition-all duration-200`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center gap-x-6">
          {currentUser ? (
            <>
              <Link
                to={`/profile/${currentUser.id}`}
                className={`flex items-center gap-x-2 ${
                  isScrolled ? "text-black" : "text-gray-300"
                } hover:text-red-300`}
              >
                <FaUser />
                <span>{currentUser?.username}</span>
              </Link>
              <button
                onClick={logout}
                className={`text-sm bg-transparent px-4 py-1.5 border-2 border-red-300 ${
                  isScrolled ? "text-black" : "text-white"
                } hover:bg-red-300 flex items-center gap-x-1.5 transition-all duration-200 cursor-pointer`}
              >
                <MdOutlineLogout />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button
                className={`text-sm bg-transparent px-4 py-1.5 border-2 border-red-300 ${
                  isScrolled ? "text-black" : "text-white"
                } hover:bg-red-300 flex items-center gap-x-1.5 transition-all duration-200 cursor-pointer`}
              >
                <MdOutlineLogin />
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${
            isScrolled ? "text-black" : "text-white"
          } text-2xl`}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white p-5 flex flex-col items-start gap-4 md:hidden shadow-lg">
          {collections.map((category) => (
            <Link
              key={category.id}
              to={`/${category.name}`}
              className="text-black hover:text-red-300 border-b border-transparent hover:border-red-300 pb-1 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}

          <div className="w-full flex flex-col items-start gap-3">
            {currentUser ? (
              <>
                <Link
                  to={`/profile/${currentUser.id}`}
                  className="flex items-center gap-x-2 text-black hover:text-red-300"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaUser />
                  <span>{currentUser?.username}</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-sm bg-transparent px-4 py-1.5 border-2 border-red-300 text-black hover:bg-red-300 flex items-center gap-x-1.5 transition-all duration-200 cursor-pointer"
                >
                  <MdOutlineLogout />
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <button className="text-sm bg-transparent px-4 py-1.5 border-2 border-red-300 text-black hover:bg-red-300 flex items-center gap-x-1.5 transition-all duration-200 cursor-pointer">
                  <MdOutlineLogin />
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
