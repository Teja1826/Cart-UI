import React from "react";

function Products(props) {
  return (
    <div className="brandProducts">
      <div className="productDetails">
        <h4>{props.product.name}</h4>
        <p> Price : {props.product.price}</p>
      </div>
      <div className="productQnty">
        <button>+</button>
        <p>1</p>
        <button>-</button>
      </div>
    </div>
  );
}

export default Products;
