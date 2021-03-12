import "./Home.css";
import React, { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import Product from "../../components/Product/Product";
import { getProducts } from "../../services/crud";
import { useCart } from "react-use-cart";
import { AZ, ZA } from "../../utils/sort";
import Layout from "../../components/shared/Layout/Layout";

const Home = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);

  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  const handleFilter = (event) => {
    const filteredResult = queriedProducts.filter((product) =>
      product.category.includes(event.target.case)
    );
    console.log(filteredResult);
  };

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
    <div className="product-cart-container" key={product._id}>
      <Product
        _id={product._id}
        name={product.name}
        quantity={product.quantity}
        imgURL={product.imgURL}
        key={product._id}
      />
      <button
        className="addtocart"
        onClick={() => addItem({ ...product, id: product._id })}
      >
        <i className="fas fa-plus-square add-class"></i>
      </button>
    </div>
  ));

  return (
    <Layout user={props.user}>
      <div className="home-screen">
        <div className="sort-box">
          <Filter
            onSubmit={handleSubmit}
            onChange={handleFilter}
            queriedProducts={queriedProducts}
          />
        </div>
        <div className="products-box">
          <div className="search-container">
            <Search onSubmit={handleSubmit} onChange={handleSearch} />
            <Sort onSubmit={handleSubmit} onChange={handleSort} />
          </div>
          <div className="products-section">{productsJSX}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
