'use client';

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faShoppingCart,
    faSearch,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { navItems } from "../../locals/data/naigationData";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <header className="border-b border-gray-200">
            {/* Top Bar */}
            <div className="flex justify-between text-sm text-gray-600 px-4 py-2 bg-gray-50">
                <div>
                    <a href="#" className="text-[#6a983c] font-medium">Chat with us</a> |<a href="tel:+201552242010"> +201552242010</a> |<a href="omarothman20002@gmail.com" target="_blank"> omarothman20002@gmail.com</a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/store/blog">Blog</Link>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/careers">Careers</Link>
                </div>
            </div>

            {/* Main Header */}
            <div className="flex items-center justify-between px-4 py-4">
                <h1 className="text-2xl font-bold text-gray-800">Freshnesecom</h1>

                {/* Search */}
                <div className="hidden md:flex items-center border border-gray-200  rounded-xl w-1/2 bg-gray-100">
                    <select className="bg-transparent px-2 py-2 text-gray-600">
                        <option>All categories</option>
                        <option>Mens</option>
                        <option>Women</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search Products, categories ..."
                        className="w-full px-2 py-2 outline-none"
                    />
                    <button className="border-0 outline-0 cursor-pointer">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-500 px-3" />
                    </button>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faUser} className="text-xl text-gray-700 cursor-pointer" />
                    <div className="relative">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-gray-700 cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-700 text-xl"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className={`md:block ${menuOpen ? 'block' : 'hidden'} bg-gray-50 border-t border-gray-200`}>
                <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 py-3 text-gray-700 text-sm font-medium px-4 md:px-0">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a href="#" className="hover:text-green-600">{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
