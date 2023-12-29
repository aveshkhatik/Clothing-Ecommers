import React from "react";
import { Link } from "react-router-dom";

const Catogary = () => {
  const CompanyLogo = [
    { id: 1, img: "public/images/company/brand-1.png" },
    { id: 1, img: "public/images/company/brand-2.png" },
    { id: 1, img: "public/images/company/brand-3.png" },
    { id: 1, img: "public/images/company/brand-4.png" },
    { id: 1, img: "public/images/company/brand-5.png" },
  ];
  return (
    <div className="max-w-screen-2xl container xl:px-28 px-4 py-16">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {CompanyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      {/* catogary grid */}
      <div className=" flex flex-col md:flex-row items-center gap-4 mt-8">
        <p className=" font-semibold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src="images/catogary/image-category-1.png"
              alt=""
              className="w-full hover:scale-105 duration-200 transition-all rounded-sm"
            />
          </Link>
        </div>
        <div className=" md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <Link to="/">
              <img
                src="images/catogary/image-category-2.png"
                alt=""
                className="w-full hover:scale-105 duration-200 transition-all rounded-sm"
              />
            </Link>
            <Link to="/">
              <img
                src="images/catogary/image-category-3.png"
                alt=""
                className="w-full hover:scale-105 duration-200 transition-all rounded-sm"
              />
            </Link>
            <Link to="/">
              <img
                src="images/catogary/image-category-4.png"
                alt=""
                className="w-full hover:scale-105 duration-200 transition-all rounded-sm"
              />
            </Link>
            <Link to="/">
              <img
                src="images/catogary/image-category-5.png"
                alt=""
                className="w-full hover:scale-105 duration-200 transition-all rounded-sm"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catogary;
