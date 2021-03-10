import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/crud";
import Product from "../Product/Product";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const assignProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    assignProducts();
  }, [toggleFetch]);

  console.log(products)

  return (
    <div className="products-section">
      {products.map((product, index) => (
        <div className="products-container" key={index}>
          <Product setToggleFetch={setToggleFetch} product={product} />
        </div>
      ))}
    </div>
  );
}

export default Products;
