import React from 'react';
import { AnimatePresence } from "framer-motion";

const Sidebar = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <div
          initial={{ opacity: 0, y: -100}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-50"
        >
          <div className="font-bold bg-gray-50 py-6 m-6 rounded-3xl shadow-lg">
            <ul className='flex flex-col gap-3 items-center m-3'>
              <li className="decoration-solid underline-offset-4 hover:underline cursor-pointer">
                <a href="#">About</a>
              </li>
              <li className="decoration-solid underline-offset-4 hover:underline cursor-pointer">
                <a href="#">Services</a>
              </li>
              <li className="decoration-solid underline-offset-4 hover:underline cursor-pointer">
                <a href="#">Products</a>
              </li>
              <li className="decoration-solid underline-offset-4 hover:underline cursor-pointer">
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
