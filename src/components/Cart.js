import React, { useState, useEffect } from "react";
import axios from "axios";
import Brand from "./Brand";
import Products from "./Products";
import CartItems from "./CartItems";
import Checkout from "./Checkout";

function Cart() {
  const [products, setProducts] = useState([]);
  const [productsInBrand, setProductsInBrand] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandsCount, setBrandsCount] = useState({});
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://gist.githubusercontent.com/sandeepdillerao/edb372a95d6cf1a2a49b79577d023281/raw/75bf5e59e47748fad0d01ca63c81dd3791c2615c/product.json`
      )
      .then((response) => {
        setProducts(response.data);
        getUniqueBrands();
      })
      .then(() => {
        getBrandsCount();
      })
      .then(() => {
        brandHandler(brands[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getUniqueBrands = () => {
    let uniqueBrands = [];
    products.forEach((product) => {
      if (!uniqueBrands.includes(product.brand)) {
        uniqueBrands.push(product.brand);
      }
    });
    setBrands(uniqueBrands);
  };

  const getBrandsCount = () => {
    let brandCount = {};
    products.forEach((product) => {
      brandCount[product.brand] = brandCount[product.brand] + 1 || 1;
    });
    setBrandsCount(brandCount);
  };

  const brandHandler = (brandName) => {
    let items = products.filter((product) => product.brand === brandName);
    setProductsInBrand(items);
    setBrandName(brandName);
  };
  return (
    <div className="cart">
      <div className="brandsList">
        <div className="brandHeader">
          <h4>Brands</h4>
        </div>
        <div className="brands">
          {brands.map((brand) => (
            <Brand
              key={brand}
              brandName={brand}
              brandCount={brandsCount[brand]}
              brandHandler={brandHandler}
            />
          ))}
        </div>
      </div>
      <div className="productsList">
        <div className="productHeader">
          <h4>{brandName ? `Products of ${brandName}` : "Products"}</h4>
        </div>
        <div className="products">
          {productsInBrand.map((product, id) => (
            <Products key={id} product={product} />
          ))}
        </div>
      </div>
      <div className="cartList">
        <div className="cartHeader">
          <h4>Cart</h4>
        </div>
        <div className="cartContent">
          <div className="cartItems">
            <CartItems />
          </div>
        </div>
        <div className="cartCheckout">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default Cart;
