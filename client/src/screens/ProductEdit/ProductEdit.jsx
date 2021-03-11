import React, { useEffect, useState } from "react"
import { Redirect, useParams } from "react-router"
import Layout from "../../components/shared/Layout/Layout"
import { getProduct, updateProduct } from "../../services/crud"
import "./ProductEdit.css"

export default function ProductEdit (props) {   
    const [product, setProduct] = useState({
        name: '',
        imageURL: '',
        description: '',
        price: '',
        category: '',
        quantitiy:'',
    })

    const [isUpdated, setUpdated] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(id)
            setProduct(product)
        }
        fetchProduct()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updated = await updateProduct(id, product)
        setUpdated(updated)
    }

    if (isUpdated) {
        return <Redirect to={`/products/${id}`} />
    }

    return (
        <Layout>   
            <div className="product-edit-screen">
                <div className="edit-image-container">
                    <img className="edit-product-image" src={product.imgURL} alt={product.name} />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="edit-input-image-link"
                            placeholder='Image Link'
                            value={product.imgURL}
                            name='imgURL'
                            required
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <form className="edit-form" onSubmit={handleSubmit}>
                    <input
                        className="input-name"
                        placeholder='Name'
                        value={product.name}
                        name='name'
                        required
                        autoFocus
                        onChange={handleChange}
                    />
                    <input
                        className="input-price"
                        placeholder='Price'
                        value={product.price}
                        name='price'
                        required
                        onChange={handleChange}
                    />
                    <input
                        className="input-category"
                        placeholder='Category'
                        value={product.category}
                        name='category'
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        rows={10}
                        cols={78}
                        placeholder='Description'
                        value={product.description}
                        name='description'
                        required
                        onChange={handleChange}
                    />
                    <button type='submit' className="edit-save-button">Save</button>
                </form>
            </div>
        </Layout>
    )
} 