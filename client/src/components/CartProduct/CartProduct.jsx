import "./CartProduct.css";
import { Link } from "react-router-dom";

const CartProduct = (props) => {
  return (
    <>
      <Link className="cart-prod-link" to={`/products/${props._id}`}>
        <img className="cart-prod-image" src={props.imgURL} alt={props.name} />
        <div className="cart-prod-name">{props.name}</div>
        <div className="cart-prod-quantity">{props.quantity}</div>
      </Link>
    </>
  );
};

export default CartProduct;
