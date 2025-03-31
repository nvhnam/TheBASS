import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-2 text-sm">
          <a href="#" className="cursor-pointer">
            Courses Login
          </a>
          <a href="#" className="cursor-pointer">
            Refund Policy
          </a>
          <a href="#" className="cursor-pointer">
            Terms of Service
          </a>
          <a href="#" className="cursor-pointer">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-col space-y-2 text-sm">
          <a href="#" className="cursor-pointer">
            Courses
          </a>
          <a href="#" className="cursor-pointer">
            Presets
          </a>
          {/* <a href="#" className="cursor-pointer">
            Merch
          </a> */}
          <a href="#" className="cursor-pointer">
            Blog
          </a>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-2">
            Sign Up and Save
          </h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and special deals.
          </p>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <span className="px-3 text-gray-400">✉️</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white flex-1 py-2 px-3 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex text-2xl gap-2 max-w-7xl mx-auto px-6 mt-6 space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            <button className=" cursor-pointer">
              <span>
                <FaFacebookF />
              </span>
            </button>
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            <button className=" cursor-pointer">
              <span>
                <FaInstagram />
              </span>
            </button>
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            <button className=" cursor-pointer">
              <span>
                <FaYoutube />
              </span>
            </button>
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-400 cursor-pointer"
          >
            <button className=" cursor-pointer">
              <span>
                <FaTwitter />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-10 p-3">
        <h3 className="text-sm text-slate-300 italic">
          The BASS © <span>{new Date().getFullYear()}</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
