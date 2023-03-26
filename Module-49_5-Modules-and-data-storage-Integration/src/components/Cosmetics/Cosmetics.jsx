import React from 'react';
import add, { multiply, subtract } from '../../../Utilities/calculate';

const Cosmetics = () => {
    const first = 55
    const second = 15
    const sum = add(first, second)
    const sub = subtract(first, second)
    const mult = multiply(first, second)
    return (
        <div>
            <h1>Welcome to Cosmetics Store</h1>
            <p>Sum of two number: {sum}</p>
            <p>Sub of two number: {sub}</p>
            <p>Multiply of two number: {mult}</p>
        </div>
    );
};

export default Cosmetics;