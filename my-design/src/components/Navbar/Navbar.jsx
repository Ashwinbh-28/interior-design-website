import React from "react";
import Logo from "../../assets/logo.png";
import Hamburger from "hamburger-react";
import Sidebar from "./Sidebar";
// import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "Project",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="container py-6 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="text-2xl font-bold">Linéa Haus</span>
        </div>
        {/* Link section */}
        <div className=" hidden lg:flex !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="flex mx-4 text-lg font-semibold decoration-solid underline-offset-6 hover:underline"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button section */}
        <button className="primary-btn hidden lg:flex ">
          <a href="#">Try For Free</a>
        </button>
        {/* Hamburger menu */}
        <div
          className="ham-menu block lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <Hamburger />
        </div>
      </nav>

      {/* Mobile sidebar menu */}
      <Sidebar open={open} />
    </>
  );
};

export default Navbar;
