import React from 'react';
import { addToDb, removeFromDb } from '../../../Utilities/fakedb';
import './Shoe.css'

const Shoe = ({shoe}) => {
    const {name, price, id} = shoe

    const addToCart = (id) => {
        addToDb(id)
    }

    const removeFromCart = (id) => {
        removeFromDb(id)
    }

    return (
        <div className='product'>
            <p><small>ID is: {id}</small></p>
            <h3>Shoe : {name}</h3>
            <h3>Price : {price}</h3>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Shoe;