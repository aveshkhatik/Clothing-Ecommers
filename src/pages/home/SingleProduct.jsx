import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responce = await fetch("/products.json");
        const data = await responce.json();
        const products = data.filter((p) => p.id == id);
        setProduct(products[0]);
        // console.log(products);
      } catch (error) {
        console.log("error fetching:", error);
      }
    };
    fetchProduct();
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [id]);
  const { title, category, price, image, status } = product;
  //   console.log(id);
  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
      <div className="mt-4">
        <a href="/" className=" text-gray-600">Home</a>
        <a href="/shop" className=" font-bold text-black"> /Shop</a>
      </div>
        <div className="mt-2 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>
            {/* product details */}
            <div>
              <h1 className="title text-left">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae harum facilis maxime unde eaque mollitia eveniet
                velit. Pariatur non aut voluptas quos distinctio ipsa placeat
                maxime accusamus. Veritatis, officiis minima. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Deserunt veritatis fugiat
                perspiciatis doloremque similique! Et rem iusto eaque quaerat,
                iste eum ullam suscipit, veritatis inventore repellendus
                explicabo, enim doloremque. Voluptates.
              </p>
              <span className=" my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                ${price}
              </p>
              <div className="mt-3">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className=" font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500
                  "
                  />
                </div>
                <div className=" w-full text-left mt-4">
                <button className="flex justify-center items-center bg-red-500 text-white font-bold gap-2 w-full py-3 px-4 border border-red-500 rounded-md ease-in-out duration-200 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-4">
                  <span>Confirmed Order</span>
                  <FaArrowAltCircleRight />
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
