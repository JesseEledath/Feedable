import { useEffect, useState } from "react";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/crud";
import { useCart } from "react-use-cart";
import { useParams, Link, useHistory } from "react-router-dom";

const ProductDetail = (props) => {
  const [product, setProduct] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { addItem } = useCart();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  const handleDelete = () => {
    deleteProduct(product._id).then(history.push("/products"));
  };

  const authenticatedOptions = (
    < >
      <button
        className="details-addtocart"
        onClick={() => addItem({ ...product, id: product._id })}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </>
  );
  const adminAuthenticatedOptions = (
    <>
      <button className="edit-button">
        <Link className="edit-link" to={`/products/${product._id}/edit`}>
          Edit
        </Link>
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      <button
        className="details-addtocart"
        onClick={() => addItem({ ...product, id: product._id })}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </>
  );
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="screen">
        <div className="product-detail">
          <img
            className="product-detail-image"
            src={product.imgURL}
            alt={product.name}
          />
          <div className="detail">
            <div className="detail-name">{product.name}</div>
            <div className="detail-description">{product.description}</div>
            <div className="product-quantity">Qty {product.quantity}</div>
            <div className="detail-price">${product.price}</div>
            <div className="button-container">
              {props.user ? props.user.role=== "Admin" ? adminAuthenticatedOptions : authenticatedOptions : null}
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProductDetail;
