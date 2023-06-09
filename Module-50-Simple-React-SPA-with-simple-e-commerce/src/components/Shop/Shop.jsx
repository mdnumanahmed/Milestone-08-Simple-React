import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summery</h2>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: </p>
                <p>Shipping Charge: </p>
                <p>Tax: </p>
                <h3>Grand Total: </h3>
            </div>
        </div>
    );
};

export default Shop;