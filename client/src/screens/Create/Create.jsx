import React, { useState } from "react";
import "./Create.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createProduct } from "../../services/crud";

const Create = (props) => {
  const [product, setProduct] = useState({
    name: '',
    imgURL: '',
    description: '',
    category: '',
    quantity: '',
    price: ''
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
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="create-name"
          type="text"
          placeholder="Product Name"
          value={product.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="create-img"
          type="text"
          placeholder="Image Link"
          value={product.imgURL}
          name="imgURL"
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className="create-description"
          rows={10}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="create-name"
          type="text"
          placeholder="Category"
          value={product.category}
          name="category"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="create-quantity"
          type="number"
          placeholder="Quantity"
          value={product.quantity}
          name="quantity"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="create-price"
          type="number"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="create-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Create;
