import React, { useEffect, useState } from "react";
import Slides from "../../components/Carousel/Slides";
import Filter from "../../components/Filter/Filter";
import { getProducts } from "../../services/crud";

function LandingPage(props) {
  const [allProducts, setAllProducts] = useState([]);
  // Useeffect for AllProducts ========================
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);
  // Rendering =====================================
  return (
    <div className="landing-page-container">
      <Slides allProducts={allProducts} />
      <Filter allProducts={allProducts} />
    </div>
  );
}

export default LandingPage;
