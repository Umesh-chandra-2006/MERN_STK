import React from "react";

function Product(props) {
  //state
  const { productId, name, price, brand, description, image } = props;

  //return a react element
  return (
    <div className="bg-black border-2 text-white border-gray-950 m-4 p-4">
      <img src={image} alt={name} className="mb-4"/>
      <p className="font-bold">{productId}: {brand}</p>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="font-bold">Price: ₹{price}</p>
      <p className="text-xl mt-1"> {description}</p>
    </div>
  );
}

export default Product;
