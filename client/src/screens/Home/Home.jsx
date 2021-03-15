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
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);

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

    const filteredResult = allProducts.filter(product =>
      event.target.checked ? product.category.includes(event.target.value) : true)
    setQueriedProducts(filteredResult)
    // console.log("filteredResult", filteredResult)
    // console.log(event.target.checked)
  }

  // const handleFilter = (event) => {

  //   const filterSet = allProducts.filter(product =>
  //     product.category.includes(event.target.value))
  //   // setQueriedProducts(filterSet)
  //   console.log("filterSet", filterSet)
    
  //   filterSet.forEach(filterElement => {
  //     if (queriedProducts.includes(filterElement)) {
  //       const filterIndex = queriedProducts.indexOf(filterElement);
  //       const newFilter = [...queriedProducts]
  //       newFilter.splice(filterIndex, 1);
  //       setQueriedProducts(newFilter)
  //     } else {
  //       setQueriedProducts([...queriedProducts, filterElement])
  //     }
  //   });
  // }

  // const handleFilter = (event) => {
  //   console.log("before", categories)

  //   const checkedBox = event.target.type === "checkbox" && event.target.checked
  //   console.log("checkedBox", checkedBox)
  //   if (checkedBox) {
  //     setCategories([...categories, event.target.value])
  //   }
  //   console.log("checked categories", categories)
  //   if (categories.includes(event.target.checked)) {
  //     const filterIndex = categories.indexOf(event.target.value);
  //     const newFilter = [...categories]
  //     newFilter.splice(filterIndex, 1);
  //     setCategories(newFilter)
  //     console.log("if", categories)
  //     console.log("if value", event.target.value)
  //   } else {
  //   setCategories([...categories, event.target.value])
  //     console.log("else", categories)
  //     console.log("else value", event.target.value)
  //   }
  //   console.log("checked", event.target.checked)
  //   // extract the category from the click and...
  //   // ...if it isn't already in the activeFilter array...
  //   // ...then store it in the activeFilter array
  //   // ...else if it is already in the activeFilter, remove it
  //   // Compare the categories in allProducts to the activeFilter array,
  //   // return products with categories that match any category in the active filter array
  //   }

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
        price={product.price}
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
