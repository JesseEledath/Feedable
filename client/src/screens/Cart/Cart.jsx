import Layout from "../../components/shared/Layout/Layout";
import { useCart } from "react-use-cart";
import { useHistory } from "react-router-dom";
import "./Cart.css";

export default function Cart(props) {
  const history = useHistory();
  const {
    isEmpty,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  const checkoutBtn = () => {
    emptyCart()
    history.goBack();
  }

  if (isEmpty)
    return (
      <Layout user={props.user}>
        <div className="screen">Your Cart is Empty</div>
      </Layout>
    );

  return (
    <Layout user={props.user}>
      <div className="screen">
        <div className="cart-content-container">
          <div className="cart-items-container">
            {items.map((item) => (
              <div className="cart-container" key={item._id}>
                <div className="img-cart-cont">
                  <img className="cart-img" src={item.imgURL} alt="" />
                </div>
                <div className="cart-name">{item.name}</div>
                <div className="cart-quantity">{item.quantity}</div>
                <div className="cart-item-price">Price: ${item.price}</div>
                <div className="cart-buttons-container">
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
              </div>
            ))}
          </div>
          <div className="checkout-container">
            <h1 className="total-items">Total items ({totalItems})</h1>
            <div className="checkout-items-price-container">
              <div className="total-title-container">
                <div className="item-total-title">Item Total</div>
              </div>
              {items.map((item, i) => (
                <div className="checkout-items-prices">
                  <div key={i} className="checkout-item-price">${item.price} x {item.quantity} </div>
                  <div className="checkout-items-eachtotal">${item.price * item.quantity}</div>
                </div>
              ))}
            </div>
            <div className="total-price-container">
              <div className="total-price">
                Total: ${cartTotal.toFixed(2)}
              </div>
            </div>
            <button
              className="checkout-button"
              onClick={() => checkoutBtn()}
            >
            Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
