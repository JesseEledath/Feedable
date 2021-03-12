import React, { useEffect, useState } from "react";
import Slider from "../../components/Carousel/Slider";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/crud";
import './LandingPage.css'

function LandingPage(props) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <Layout user={props.user}>
      <div className="landing-page-screen">
        <Slider products={allProducts} />
        <h1>HELLO</h1>
      </div>
    </Layout>
  );
}

export default LandingPage;
