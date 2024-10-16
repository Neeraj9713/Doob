import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";
import { RiInstagramLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiAlignJustify } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import img from "../../public/logo/logo-white.png";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav  className="navbar font-medium bg-black/50">
      <div className=" border-b border-border-color">
        <div className="navbar-one py-3 max-w-6xl mx-auto md:flex md:justify-center md:items-center">
          <div className="text-[16px] text-center">
            <p>Get the most advanced template &gt;</p>
          </div>
          <div className="nav-address flex justify-evenly items-center text-[14px] px-3 gap-2 flex-wrap">
            <div className="flex justify-center items-center gap-2">
              <HiOutlineMapPin className="w-auto h-4 " />
              <p className="">Alabama, USA</p>
            </div>
              <span className="text-[#FFFFFF1A]">|</span>
            <div className="flex justify-center items-center gap-2">
              <FiPhone className="w-auto h-4" />
              <p>+06 58 49 99 56</p>
            </div>
              <span className="text-[#FFFFFF1A]">|</span>
            <div className="flex justify-center items-center gap-4">
              <FiFacebook className="w-auto h-4" />
              <SlSocialTwitter className="w-auto h-4" />
              <RiInstagramLine className="w-auto h-4" />
              <SlSocialLinkedin className="w-auto h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-6xl mx-auto navbar-2 sticky top-0 z-20 border-b border-border-color w-full">
        <div className="navbar-two p-3 flex justify-between  items-center ">
          <div className="logo-img">
            <img src={img} className="w-auto h-8 " alt="" />
          </div>
          <div className="text-lg flex justify-between items-center gap-6 ">
            <ul className="justify-evenly items-center gap-8 hidden md:flex">
              <li> <Link to="/" > Home</Link></li>
              <li><Link to="/about"> About</Link></li>
              <li>Element</li>
              <li>Blog</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
            <div className="flex gap-10 ">
              <div className=" ml-4 w-20 py-2 px-2 text-center text-xs rounded-3xl bg-gradient-to-r from-[#9521f3] via-[#ff08de] to-[#ee4444] text-gradient ">
                <a href="" className="text-white bg-transparent ">
                  BUY NOW
                </a>
              </div>
              <div className="rounded-full bg-[#111] p-2 md:hidden">
              <FiAlignJustify className="bg-transparent" />
              </div>
              <div className="p-2 rounded-3xl bg-[#fb5343] ">
                <LuSun className="w-auto h-4 font-bold text-white bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
