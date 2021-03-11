import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout"
import { getProducts } from "../../services/crud";

export default function Cart (props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getProducts()
            setProducts(res)
        }
        fetchProducts()
        console.log(products);
    }, [])

    const listProducts = products.map(product => (
        <div key={product._id}></div>
    ))
    // console.log(localStorage);

    return (
        <Layout>
            <div className="cart-screen">
                
            </div>
        </Layout>
    )
}