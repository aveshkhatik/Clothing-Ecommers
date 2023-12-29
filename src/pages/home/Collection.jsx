import React from "react";
import zaraLogo from "../../../public/images/collection/zara.png";

const Collection = () => {
  return (
    <div className='bg-[url("/images/collection/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
      <div className="h-[580px] flex justify-between md:flex-row items-center">
        <div className=" md:w-1/2"></div>
        <div className=" md:w-1/2">
          <img src={zaraLogo} alt="zaralogo" />
          <p className=" text-lg capitalize my-8 text-white md:w-2/3 leading-[32px]">
            lostrous yet understated. the new evening wear collection
            exclusively offered at the reopened giorgio armani boutique in los
            angles
          </p>
          <button className=" px-6 py-2 text-Black bg-white rounded-sm font-semibold">See Collections</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
