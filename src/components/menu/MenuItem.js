import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        {" "}
        <img
          src="/pizza.png"
          alt="pizaa"
          className="max-h-auto max-h-24 block mx-auto"
        />
      </div>

      <h4 className="font-semibold text-xl my-3">Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem.
      </p>
      <button className="bg-primary rounded-full p-4 mt-4">
        Add to Cart $12
      </button>
    </div>
  );
};

export default MenuItem;
