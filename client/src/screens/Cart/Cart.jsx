import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout"
import { getProducts } from "../../services/crud";
import { useCart } from 'react-use-cart'

export default function Cart (props) {
    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const res = await getProducts()
    //         setProducts(res)
    //     }
    //     fetchProducts()
    // }, [])
    // console.log(products);

    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        updateItemQuantity,
        removeItem
    } = useCart()

    if (isEmpty) return (
        <Layout user={props.user}>
            <div className='cart-screen'>Your Cart is Empty</div>
        </Layout>
    )


    return (
        <Layout user={props.user}>
            <div className="cart-screen">
                <h1>Cart ({totalUniqueItems})</h1>
                <h1>Cart ({totalItems})</h1>
                <ul>
                    {items.map((item) => (
                        <li key={item._id}>
                            {item.quantity} x {item.name} &mdash;
                            <button onClick={() => updateItemQuantity(item._id, item.quantity - 1)}>
                                -
                            </button>
                            <button onClick={() => updateItemQuantity(item._id, item.quantity + 1)}>
                                +
                            </button>
                            <button onClick={() => removeItem(item._id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}