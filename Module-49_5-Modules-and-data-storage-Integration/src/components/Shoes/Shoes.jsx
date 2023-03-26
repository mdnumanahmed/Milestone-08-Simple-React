import React, { useEffect, useState } from 'react';
import { getTotal } from '../../../Utilities/fakedb';
import Shoe from '../Shoe/Shoe';
import './Shoes.css'

const Shoes = () => {
    /* Option = 1 Created data
    const shoes = [
        {id: 1, name:'Sandal', price:300},
        {id: 2, name:'Fancy', price:340},
        {id: 3, name:'Soccer', price:600},
        {id: 4, name:'Adidas', price:700},
        {id: 5, name:'Naiki', price:800},
    ] */

    /* Option = 2 using json-generator.com created data
    const shoes = [
        {
          "id": "641de73106e89a3f3ad07081",
          "price": 483,
          "name": "Manner Walton"
        },
        {
          "id": "641de73145c76318571a640b",
          "price": 777,
          "name": "Josephine Cochran"
        },
        {
          "id": "641de731f6d311b4d0eee821",
          "price": 545,
          "name": "Evangelina Adams"
        },
        {
          "id": "641de73168126ad3726c20eb",
          "price": 619,
          "name": "Hooper Navarro"
        },
        {
          "id": "641de73180900f1bccad93bb",
          "price": 760,
          "name": "Sylvia Marks"
        },
        {
          "id": "641de7316ec3a272d9aac472",
          "price": 341,
          "name": "Cassandra Andrews"
        }
      ] */

    // Option- 3  using 
    const [shoes, setShoes] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setShoes(data))
    },[])

    const total = getTotal(shoes)
    
    return (
        <>
            <h1>Available Shoes in Winter</h1>
            <h2>Total Cost : ${total}</h2>
        <div className='products'>
            {
                shoes.map(shoe => <Shoe key={shoe.id} shoe={shoe} />)
            }
        </div>
        </>
    );
};

export default Shoes;