import React from "react";
import Logo from "../assets/logo.png";
// import { motion } from "framer-motion";

const NavLinks = [
  // About
  {
    id: 1,
    title: "About",
    link: "#",
  },
  // Service
  {
    id: 2,
    title: "Service",
    link: "#",
  },
  // Project
  {
    id: 3,
    title: "Projects",
    link: "#",
  },
  // Contact
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div
      // initial={{y: -100}}
      // animate={{y: 0}}
      // transition={{duration: 0.5}}
      className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="text-2xl font-bold">Interior</span>
        </div>
        {/* Link section */}
        <div className="hidden md:block !space-x-12 ">
          {NavLinks.map((link) => {
            return (
              <a 
              href={link.link} 
              className="inline-block mx-4 text-lg font-semibold hover:underline decoration-solid underline-offset-6"
              >
                {link.title}
              </a>
            );
          })}
        {/* Button section */}
        </div>
          <button className="primary-btn">Try for Free</button>
        </div>
    </>
  );
};

export default Navbar;
