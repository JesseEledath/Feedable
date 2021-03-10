import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {

  let { product } = props

  return (
    <>
      <Link className="product-link" to={`/products/${product._id}`}>
        <img className="product-image" src={product.imgURL} alt={product.name} />
      </Link>
        <div className="product-name">{product.name}</div>
        {/* <div className="product-description">{product.description}</div> */}
        {/* <div className="product-quantity">{product.quantity}</div> */}
    </>
  )
}

export default Product