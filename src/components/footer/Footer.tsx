'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { footerSections } from "../../locals/data/naigationData";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 relative mt-[10rem]">
            {/* Newsletter */}
            <div className="bg-black text-white rounded-2xl mx-4 md:mx-16 mt-10 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6  top-0 md:-translate-y-[40%]">
                <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
                    STAY UP TO DATE ABOUT <br className="hidden md:block" /> OUR LATEST OFFERS
                </h2>

                <div className="flex flex-col  gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full py-2 pl-10 pr-4 rounded-full bg-white  text-black focus:border-0 focus:outline-0"
                        />
                    </div>

                    <button className="cursor-pointer  bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>

            {/* Main Footer */}
            <div className="px-4 md:px-16 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 mt-10 text-sm">
                {/* Brand and Socials */}
                <div className="col-span-1 space-y-4">
                    <h3 className="font-bold text-lg">SHOP.CO</h3>
                    <p className="text-gray-600">
                        We have clothes that suits your style and which you’re proud to wear. From women to men.
                    </p>
                    <div className="flex gap-3">
                        <FontAwesomeIcon icon={faFacebook} className="cursor-pointer text-lg hover:text-black" />
                        <FontAwesomeIcon icon={faTwitter} className="cursor-pointer text-lg hover:text-black" />
                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-lg hover:text-black" />
                    </div>
                </div>

                {/* Footer Links */}
                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h4 className="font-bold mb-4">{section.title}</h4>
                        <ul className="space-y-2 text-gray-600">
                            {section.links.map((link) => (
                                <li key={link} className="hover:text-black cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 px-4 md:px-16 py-6 text-sm">
                <p>omar othman © 2025, All Rights Reserved</p>
                <div className="flex gap-3 mt-4 md:mt-0">
                    <img src="/assets/images/visa.svg" alt="Visa" className="h-8 w-8" />
                    <img src="/assets/images/paypal.svg" alt="Paypal" className="h-8 w-8" />
                    <img src="/assets/images/mastercard.svg" alt="Mastercard" className="h-8 w-8" />
                    <img src="/assets/images/apple-pay.svg" alt="Apple Pay" className="h-8 w-8" />
                    <img src="/assets/images/google-pay.svg" alt="google Pay" className="h-8 w-8" />
                </div>
            </div>
        </footer>
    );
}
