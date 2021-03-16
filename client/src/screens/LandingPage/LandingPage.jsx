import React, { useEffect, useState } from "react";
import Slider from "../../components/Carousel/Slider";
import SmallSlider from "../../components/Carousel/SmallSlider";
import Layout from "../../components/shared/Layout/Layout";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import { getProducts } from "../../services/crud";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage(props) {
  const [allProducts, setAllProducts] = useState([]);
  const categoryArr = ["Dairy", "Meat", "Poultry", "Sea Food"];

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
        <div className="sliders-container">
          <Slider products={allProducts} />
          <div className="sliders-column-container">
            <SmallSlider products={allProducts} />
            <SmallSlider products={allProducts} />
          </div>
        </div>
        <div className="category-container">
          <h3>Shop by category:</h3>
          <div className="category-buttons">
            {categoryArr.map((category, i) => (
              <Link key={i} to="/products">
                <CategoryButton key={i} category={category} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage;
