import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import Logo from "/avesh.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const ToggleOpen = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const NavTitle = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & EnterTainMent", path: "/" },
    { title: "Art & Collectible", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  return (
    <>
      <header className=" max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
        <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
          <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block" />
          {/* logo */}
          <a href="/">
            <img src={Logo} alt="logo" className="w-[100px] h-[32px]" />
          </a>

          {/* account and shoping */}
          <div className="text-lg text-black sm:flex items-center gap-4 hidden">
            <a href="" className="flex items-center gap-2">
              <FaUser />
              Account
            </a>
            <a href="" className="flex items-center gap-2">
              <FaShoppingBag />
              Shopping
            </a>
          </div>
          {/* navbar for small divices */}
          <div className="md:hidden">
            <button onClick={ToggleOpen}>
            { isOpenMenu ? <FaTimes  className="text-Black h-5 w-5"/> : <FaBars className="text-Black h-5 w-5"/>}
            </button>
          </div>
        </nav>
        <hr />
        {/* catogary items */}
        <div className="pt-4">
          <ul className="lg:flex justify-between items-center text-Black hidden">
            {NavTitle.map(({ title, path }) => (
              <li key={title} className="hover:text-orange-400 duration-300">
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile menu items */}
        <div>
            <ul className={`bg-Black text-white px-4 py-2 rounded h-full ${ isOpenMenu ? "" : "hidden"}`}>
                {NavTitle.map(({title, path})=>(
                    <li key={title} className=" hover:text-orange-400 cursor-pointer duration-300 my-3">
                        <Link to={path} onClick={ToggleOpen}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
