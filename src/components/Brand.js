import React from "react";

function Brand(props) {
  return (
    <div>
      <button
        onClick={() => props.brandHandler(props.brandName)}
        className="brandButton"
      >
        <h3>{props.brandName}</h3>
        <p>Products Count : ({props.brandCount})</p>
      </button>
    </div>
  );
}

export default Brand;
