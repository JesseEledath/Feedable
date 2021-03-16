import React, { useState } from "react";
import "./Create.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/crud";

const Create = (props) => {
  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
    description: "",
    category: [""],
    quantity: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };
  if (isCreated) {
    return <Redirect to={`/products`} />;
  }
  return (
    <Layout user={props.user}>
      <div className="screen">
        <form className="create-form" onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input
            className="create-name"
            type="text"
            value={product.name}
            name="name"
            placeholder="Product Name"
            required
            onChange={handleChange}
          />
          <label>Image Link</label>
          <input
            className="create-img"
            type="text"
            value={product.imgURL}
            name="imgURL"
            placeholder="Image Link"
            required
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            className="create-description"
            value={product.description}
            name="description"
            placeholder="Description"
            required
            onChange={handleChange}
          />
          <label>Category</label>
          <select
            className="create-category"
            type="text"
            value={product.category}
            name="category"
            required
            onChange={handleChange}
          >
            <option value="choose">Choose Category</option>
            <option value="meat">Meat</option>
            <option value="poultry">Poultry</option>
            <option value="sea_food">Seafood</option>
            <option value="dairy">Dairy</option>
            <option value="fruit">Fruit</option>
            <option value="produce">Produce</option>
          </select>
          <label>Quantity</label>
          <input
            className="create-quantity"
            type="number"
            value={product.quantity}
            name="quantity"
            placeholder="Quantity"
            required
            onChange={handleChange}
          />
          <label>Price</label>
          <input
            className="create-price"
            type="number"
            value={product.price}
            name="price"
            placeholder="Price"
            required
            onChange={handleChange}
          />
          <button type="submit" className="create-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Create;
