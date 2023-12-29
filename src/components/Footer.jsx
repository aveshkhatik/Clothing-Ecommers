import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      {/* footer top */}
      <div className=" max-w-screen-2xl mx-auto container xl:px-28 px-4">
        <div className=" mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className=" md:w-[300px]">
            <Link to="/">
              <img src="/avesh.png" alt="" />
            </Link>
            <p className=" my-8 text-black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className=" flex items-center gap-6">
              <FaFacebookF className=" w-5 h-5 cursor-pointer hover:text-blue-600" />
              <FaTwitter className=" w-5 h-5 cursor-pointer hover:text-blue-400" />
              <FaLinkedinIn className=" w-5 h-5 cursor-pointer hover:text-blue-600" />
              <FaInstagram className=" w-5 h-5 cursor-pointer hover:text-pink-600" />
            </div>
          </div>
          {/* catalog */}
          <div className="text-black">
            <h4 className=" font-semibold mb-3">CATALOG</h4>
            <div className=" space-y-2">
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Necklaces
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Hoodies
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Jewelry Box
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                T-shirt
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Jacket
              </Link>
            </div>
          </div>
          {/* customer services */}
          <div className=" text-black">
            <h4 className=" font-semibold mb-4">CUSTOMER SERVICES</h4>
            <div className=" space-y-2">
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Contact Us
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Track Your Order
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Product Care & Repair
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Book an Appointment
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Shipping & Returns
              </Link>
            </div>
          </div>
          {/* about us */}
          <div className=" text-black">
            <h4 className=" font-semibold mb-3">ABOUT US</h4>
            <div className=" space-y-2">
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Our Producers
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Sitemap
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                FAQ
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                About Us
              </Link>
              <Link to="/" className=" text-sm block hover:text-orange-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black">
        <p className=" text-white items-center text-center py-3">
        © {currentYear} Coral, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
