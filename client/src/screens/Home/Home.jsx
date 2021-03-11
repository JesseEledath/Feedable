import './Home.css'
import React, { useState, useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'
import Sort from '../../components/Sort/Sort'
import Product from '../../components/Product/Product'
import { getProducts } from '../../services/crud'
import { AZ, ZA } from "../../utils/sort"
import Layout from '../../components/shared/Layout/Layout'

const Home = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sortType, setSortType] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  // const handleFilter = (filter) => {
  //   setFilterType(filter);
  //   switch
  // }

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

  // console.log(queriedProducts);

  const addToCart = (el) => {
    setCart([...cart, el])
  }
  
  const productsJSX = queriedProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      description={product.description}
      quantity={product.quantity}
      imgURL={product.imgURL}
      key={index}
      addToCart={addToCart}
    />
  ));

  // console.log(cart);

  // store cart state in local storage 
  // call localStorage.getItem('cart') in the cart screen
  // map through the cart array to getProduct(id)

  return (
    <div className="home-screen">
      <Layout user={props.user}>
        <div className="products-screen">
          <div className="sort-box">
          {/* <Sort onSubmit={handleSubmit} onChange={handleSort} /> */}
          </div>
          <div className="products-box">
            <div className="search-container">
              <Search onSubmit={handleSubmit} onChange={handleSearch} />
              <Sort onSubmit={handleSubmit} onChange={handleSort} />
              {/* <Filter onSubmit={handleSubmit} onChange={handleFilter} /> */}
            </div>
            <div className="products-section">
              {productsJSX}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
