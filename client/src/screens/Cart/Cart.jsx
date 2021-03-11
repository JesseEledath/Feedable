import Layout from "../../components/shared/Layout/Layout"
import { useCart } from 'react-use-cart'

export default function Cart (props) {

    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
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
                <div>
                    {items.map((item) => (
                        <div key={item._id}>
                            <div>{item.name}</div>
                            <div>{item.quantity}</div>
                            <div>Price: ${item.price}</div>
                            <button onClick={() => updateItemQuantity(item._id, item.quantity - 1)}>
                                -
                            </button>
                            <button onClick={() => updateItemQuantity(item._id, item.quantity + 1)}>
                                +
                            </button>
                            <button onClick={() => removeItem(item._id)}>&times;</button>
                        </div>
                    ))}
                </div>
                <div>
                    Total: ${cartTotal}
                </div>
            </div>
        </Layout>
    )
}