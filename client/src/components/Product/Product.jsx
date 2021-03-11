import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {

  return (
    <div className="product-container">
      <div className="product-image-container">
        <Link className="product-link" to={`/products/${props._id}`}>
          <img className="product-image" src={props.imgURL} alt={props.name} />
        </Link>
      </div>
        <div className="product-name">{props.name}</div>
        <div className="product-description">{props.description}</div>
        <div className="product-quantity">{props.quantity}</div>
        <button className="addtocart" onClick={() => props.addToCart(props._id)}>Add to cart</button>
    </div>
  );
};

export default Product;
