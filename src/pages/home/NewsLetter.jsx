import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className=" bg-[#1E2832] bg-opacity-5 xl:px-24 px-4 py-16">
      <h2 className="title mb-8">Follow product and discount on instagram</h2>
      <div className="flex flex-col justify-center items-center gap-4 mb-20 md:flex-row">
        <Link to="/">
          <img src="public/images/instagram/instagram1.png" alt="" />
        </Link>
        <Link to="/">
          <img src="public/images/instagram/instagram2.png" alt="" />
        </Link>
        <Link to="/">
          <img src="public/images/instagram/instagram3.png" alt="" />
        </Link>
        <Link to="/">
          <img src="public/images/instagram/instagram4.png" alt="" />
        </Link>
        <Link to="/">
          <img src="public/images/instagram/instagram5.png" alt="" />
        </Link>
        <Link to="/">
          <img src="public/images/instagram/instagram6.png" alt="" />
        </Link>
      </div>

      {/* news letter */}
      <div className="w-1/2 mx-auto text-center">
        <h2 className="title mb-8">or subscribe to the NewsLetter</h2>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address...."
            className="h-8 bg-transparent border-b-2 border-black outline-none pl-2 md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input type="submit" value={"Submit"} className=" bg-black text-white px-6 py-1 rounded-sm" />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
