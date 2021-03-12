import React, { useEffect, useState } from "react";
import Slider from "../../components/Carousel/Slider";
import Layout from "../../components/shared/Layout/Layout";
import CategoryButton from "../../components/CategoryButton/CategoryButton"
import { getProducts } from "../../services/crud";
import "./LandingPage.css";

function LandingPage(props) {
  const [allProducts, setAllProducts] = useState([]);
  const [categoryArr, setCategoryArr] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="landing-screen">
        <Slider products={allProducts} />
        <div className="category-container">
          
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage;
