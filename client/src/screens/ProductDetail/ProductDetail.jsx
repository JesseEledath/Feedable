import { useEffect, useState } from "react";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/crud";
import { useCart } from "react-use-cart"
import { useParams, Link } from "react-router-dom";

const ProductDetail = (props) => {
  const [product, setProduct] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { addItem } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);


  const authenticatedOptions = (
    <>
      <button className="edit-button">
        <Link className="edit-link" to={`/products/${product._id}/edit`}>
          Edit
        </Link>
      </button>
      <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
      <button className="details-addtocart" onClick={() => addItem({ ...product, id: product._id })}>Add to cart</button>
    </>
  )


  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = () => {
    deleteProduct(product._id)
      .then(history.push("/"))
  }

  return (
    <Layout user={props.user}>
      <div className="product-detail">
        <img
          className="product-detail-image"
          src={product.imgURL}
          alt={product.name}
        />
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="description">{product.description}</div>
          <div className="product-quantity">{product.quantity}</div>
          <div className="button-container">
            {props.user ? authenticatedOptions : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetail;
