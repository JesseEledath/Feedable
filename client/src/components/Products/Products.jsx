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

  return (
    <div className="product-section">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <Product setToggleFetch={setToggleFetch} product={product} />
        </div>
      ))}
    </div>
  );
}

export default Products;
