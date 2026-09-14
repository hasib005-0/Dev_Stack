import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl text-gray-700 cursor-pointer"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Logo */}
                <img
                    src={Logo}
                    alt="Dev Stack"
                    className="w-32 sm:w-40 md:w-40"
                />

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-lg lg:text-xl font-semibold">
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        Home
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        Technologies
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        Projects
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        About
                    </li>
                    <li className="text-gray-700 cursor-pointer hover:text-pink-500">
                        Contact
                    </li>
                </ul>

                {/* Auth Buttons */}
                <div className="flex items-center gap-2 sm:gap-4 md:gap-5 font-semibold">

                    <button className="text-gray-700 cursor-pointer hover:text-pink-500 text-sm sm:text-base md:text-xl">
                        Sign In
                    </button>

                    <button className="bg-pink-600 cursor-pointer text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-pink-700 text-sm sm:text-base md:text-xl">
                        Sign Up
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white shadow-lg">
                    <ul className="flex flex-col px-6 py-5 gap-5 text-lg font-semibold">

                        <li
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 cursor-pointer hover:text-pink-500"
                        >
                            Home
                        </li>

                        <li
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 cursor-pointer hover:text-pink-500"
                        >
                            Technologies
                        </li>

                        <li
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 cursor-pointer hover:text-pink-500"
                        >
                            Projects
                        </li>

                        <li
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 cursor-pointer hover:text-pink-500"
                        >
                            About
                        </li>

                        <li
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 cursor-pointer hover:text-pink-500"
                        >
                            Contact
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;