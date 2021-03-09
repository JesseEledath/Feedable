import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <>
      <Link className="product-link" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className="product-name">{props.name}</div>
        <div className="product-description">{props.description}</div>
        <div className="product-category">{props.category}</div>
        <div className="product-quantity">{props.quantity}</div>
      </Link>
    </>
  )
}

export default Product