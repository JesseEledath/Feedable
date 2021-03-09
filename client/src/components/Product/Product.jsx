import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {

  let { product } = props

  return (
    <>
      <Link className="product-link" to={`/products/${product._id}`}>
        <img className="product-image" src={product.imgURL} alt={product.name} />
        <div className="product-name">{product.name}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-quantity">{product.quantity}</div>
      </Link>
    </>
  )
}

export default Product