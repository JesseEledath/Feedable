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
// Useeffect to get products ========================================================
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  // Sort function ======================================================================
  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(allProducts));
        break;
        case "name-descending":
          setQueriedProducts(ZA(allProducts));
          break;
          default:
        break;
      }
    };
    // Search function ===================================================================
    const handleSearch = (event) => {
      const newQueriedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setQueriedProducts(newQueriedProducts, () => handleSort(sortType));
    };
    const handleSubmit = (event) => event.preventDefault();
    
    // Products card consturctor for search and sort ===================================================
    const allProductsJSX = allProducts.map((product, index) => (
      <div className="product-cart-container" key={product._id}>
      <Product
        _id={product._id}
        name={product.name}
        description={product.description}
        price={product.price}
        imgURL={product.imgURL}
        key={product._id}
        />
      <button
        className="addtocart"
        onClick={() => addItem({ ...product, id: product._id })}
        >
        +
      </button>
    </div>
  ));
  // filter function =================================================================
    const handleFilter = (event) => {
      if (event.target.checked) {
        const filteredResult = allProducts.filter((product) =>
          event.target.checked
            ? product.category.includes(event.target.value)
            : false
        );
        const filteredArr = Array.from(new Set([...filteredResult, ...queriedProducts]))
        setQueriedProducts(filteredArr);
      } else {
        const filteredResult= queriedProducts.filter(product => {
          return !product.category.includes(event.target.value) 
        })
        setQueriedProducts(filteredResult)
      }
    };
  // Products card consturctor for filter ===================================================
    const productsJSX = queriedProducts.map((product, index) => (
      <div className="product-cart-container" key={product._id}>
        <Product
          _id={product._id}
          name={product.name}
          description={product.description}
          price={product.price}
          imgURL={product.imgURL}
          key={product._id}
        />
        <button
          className="addtocart"
          onClick={() => addItem({ ...product, id: product._id })}
        >
          +
        </button>
      </div>
    ));
// Rendering ==========================================================================
  return (
    <Layout user={props.user}>
      <div className="home-screen">
        <div className="query-section">
          <div className="sort-box">
            <Sort onSubmit={handleSubmit} onChange={handleSort} />
          </div>
          <div className="search-box">
            <Search onSubmit={handleSubmit} onChange={handleSearch} />
          </div>
        </div>
        <div className="products-box">
          <div className="filter-box">
            <Filter onSubmit={handleSubmit} onChange={handleFilter} />
          </div>
          <div className="products-section">
            {queriedProducts.length ? productsJSX : allProductsJSX}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
