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
    <nav className="container py-4 flex justify-between items-center m-2">
    {/* Left Section: Logo + Hamburger (mobile) */}
    <div className="flex items-center gap-3">
    {/* Hamburger menu: only shows on small screens */}
    <div className=" lg:hidden ">
    <Hamburger toggled={open} toggle={setOpen} size={20} />
    {open && (
      <div className="absolute top-20 left-0 w-full z-50 bg-gray-50 shadow-lg rounded-b-3xl py-6">
        <ul className="flex flex-col gap-4 items-center">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="text-lg font-semibold decoration-solid underline-offset-4 hover:underline cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
    <img
      src={Logo}
      alt="logo"
      className="w-10 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
      style={{ zIndex: 60 }}
    />
    <span className="text-2xl font-bold hidden md:flex">Linéa Haus</span>
    </div>

    {/* Center Nav Links (hidden on small) */}
    <div className="hidden lg:flex space-x-12">
    {NavLinks.map((link) => (
    <a
    key={link.id}
    href={link.link}
    className="text-lg font-semibold hover:underline underline-offset-4"
    >
    {link.title}
    </a>
    ))}
    </div>

    {/* Right CTA Button (hidden on small) */}
    <button className="primary-btn hidden lg:flex">
    <a href="#">Try For Free</a>
    </button>
    </nav>
  );
};

export default Navbar;
