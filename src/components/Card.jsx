import React from "react";
import { Link } from "react-router-dom";

const Card = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-12 shadow-sm">
      {filteredItems.slice(0,8).map(( item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt="images" className="w-full hover:scale-105 duration-200 transition-all"/>
          </Link>
          <div className="mt-4 px-4">
            <h4 className=" text-base font-semibold mb-2">{item.title}</h4>
            <div className=" flex justify-between">
              <p className=" text-black/50">{item.category}</p>
              <p className=" font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
