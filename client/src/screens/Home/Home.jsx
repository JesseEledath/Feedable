import "./Home.css";
import React, { useState, useEffect } from "react";
import Products from "../../components/Products/Products";
import Search from "../../components/Search/Search";
import Product from "../../components/Product/Product.jsx";
import Sort from "../../components/Sort/Sort";
import { getProducts } from "../../services/crud";
import { AZ, ZA } from "../../utils/sort";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts));
        break;
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts));
        break;
      default:
        break;
    }
  };
  const handleSearch = (event) => {
    const newQueriedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedProducts(newQueriedProducts, () => handleSort(sortType));
  };

  const handleSubmit = (event) => event.preventDefault();

  const productsJSX = queriedProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      key={index}
    />
  ));
  return (
    <div>
      <Layout>
        <div className="products-screen">
          <Search onSubmit={handleSubmit} onChange={handleSearch} />
          <div className="sort-box">shit</div>
          <div className="products-box">{productsJSX}</div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
