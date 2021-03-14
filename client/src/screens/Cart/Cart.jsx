import Layout from "../../components/shared/Layout/Layout";
import { useCart } from "react-use-cart";
import { useParams, useHistory } from "react-router-dom";
import "./Cart.css";

export default function Cart(props) {
  const history = useHistory();
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <Layout user={props.user}>
        <div className="screen">Your Cart is Empty</div>
      </Layout>
    );

  return (
    <Layout user={props.user}>
      <div className="screen">
        <h1 className="unique-items">Unique items ({totalUniqueItems})</h1>
        <h1 className="total-items">Total items ({totalItems})</h1>
        <div>
          {items.map((item) => (
            <div className="cart-container" key={item._id}>
              <div className="img-cart-cont">
                <img className="cart-img" src={item.imgURL} alt="" />
              </div>
              <div className="cart-name">{item.name}</div>
              <div className="cart-quantity">{item.quantity}</div>
              <div className="cart-item-price">Price: ${item.price}</div>

              <button
                className="add-cart-button"
                onClick={() => updateItemQuantity(item._id, item.quantity + 1)}
              >
                <i className="fas fa-plus-square"></i>
              </button>
              <button
                className="subtruct-cart-button"
                onClick={() => updateItemQuantity(item._id, item.quantity - 1)}
              >
                <i className="fas fa-minus-square"></i>
              </button>
              <button
                className="remove-cart-button"
                onClick={() => removeItem(item._id)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          ))}
        </div>
        <div className="total-price">
          Total: ${cartTotal.toFixed(2)}
          <button
            className="checkout-button"
            onClick={() => history.goBack()}
            onClick={() => emptyCart()}
          >
            Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
}
