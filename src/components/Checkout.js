import React, { useState } from "react";

function Checkout() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");

  return (
    <div className="checkoutContainer">
      <h4>Total No. of Items: </h4>
      <h4>Grand Total: </h4>
      <form className="checkoutForm">
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={userMobile}
          onChange={(e) => setUserMobile(e.target.value)}
        />
        <button>Checkout</button>
      </form>
    </div>
  );
}

export default Checkout;
