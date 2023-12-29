import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectCatogary, setSelectCatogary] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const responce = await fetch("products.json");
        const data = await responce.json();
        setProduct(data);
        setFilteredItems(data);
        // console.log(data);
      } catch (error) {
        console.log("error fetching:", error);
      }
    };
    fetchProduct();
  }, []);

  //filtering functions
  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? product
        : product.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectCatogary(category);
  };

  //show all products
  const showAll = () => {
    setFilteredItems(product);
    setSelectCatogary("all");
  };

  //sorting functions
  const handleSortingChange = (option) => {
    setSortOption(option);

    //logic for sorting

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
  };
  return (
    <div className=" max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Or subscribe to the newsletter</h2>

      {/* product card */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all buttons */}
          <div className=" flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItem("Dress")}>Clothing</button>
            <button onClick={() => filterItem("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItem("Bag")}>Bag</button>
          </div>
          {/* sorting options */}
          <div className="flex justify-end rounded-sm mb-4 gap-0.5">
            <div className=" bg-Black p-2">
              <FaFilter className=" text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortingChange(e.target.value)}
              value={sortOption}
              className=" bg-Black text-white px-2 py-1 rounded-sm"
            >
              <option value="default"> Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        {/* card component */}
      </div>
      <Card filteredItems={filteredItems} />
    </div>
  );
};

export default Products;
