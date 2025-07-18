import React from 'react';
import Logo from '../assets/logo.png';


const NavLinks = [
    // About
    {
    id: 1,
    title : "About",
    link : "#"
    },
    // Service
    {
        id: 2,
        title : "Service",
        link : "#"
    },
    // Project
    {
        id: 3,
        title : "Projects",
        link : "#"
    },
    // Contact
    {
        id: 4,
        title : "Contact",
        link : "#"
    }
]





const Navbar = () => {
    return (
    <>
    <div className="container py-4">
        {/* Logo section */}
        <img src={Logo} alt="logo" className='w-10' />
        {/* Link section */}
        {
            <div>
                {
                NavLinks.map((link) =>{
                    return (
                        <a href={link.link} className='mx-4'>{link.title}</a>
                    )
                })}
            </div>
        }
        {/* Button section */}
    </div>
    </>
    );
}

export default Navbar;