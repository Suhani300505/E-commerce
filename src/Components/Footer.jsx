import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    
    <div className="bg-gray-100 py-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm px-2 sm:px-10">
        {/* Company Info */}
        <div>
          <img src={assets.logo} alt="Logo" className=" w-26" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eligendi minima eveniet dolorem fuga, aperiam totam expedita consectetur amet harum atque nisi quia asperiores, perspiciatis rerum temporibus veritatis incidunt? Dignissimos.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Delivery</li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-123-456-7890</li>
            <li>fashion@gmail.com</li>
          </ul>
          <ul className="flex flex-row gap-6 mt-4">
            <li className="text-gray-600 text-2xl hover:text-blue-600 transition-all duration-300">
              <FaFacebook />
            </li>
            <li className="text-gray-600 text-2xl hover:text-blue-400 transition-all duration-300">
              <AiFillTwitterCircle />
            </li>
            <li className="text-gray-600 text-2xl hover:text-green-500 transition-all duration-300">
              <RiWhatsappFill />
            </li>
            <li className="text-gray-600 text-2xl hover:text-pink-500 transition-all duration-300">
              <AiFillInstagram />
            </li>
            <li className="text-gray-600 text-2xl hover:text-red-600 transition-all duration-300">
              <SiGmail />
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-600"> &copy; Copyright 2024 @ fashion.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
