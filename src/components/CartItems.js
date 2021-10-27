import React from "react";

function CartItems(props) {
  return (
    <div>
      <h4>Product Name :</h4>
      <div className="cartItemDetails">
        <p>Qty:</p>
        <p>Total:</p>
      </div>
    </div>
  );
}

export default CartItems;
