// use local storage to manage cart data

/* // Single data এর ক্ষেত্রে
export const addToDb = (id) => {
    const quantity = localStorage.getItem(id)
    if(quantity){
        const newQuantity = parseInt(quantity) + 1
        localStorage.setItem(id, newQuantity)
    }else{
        localStorage.setItem(id, 1)
    }
} */


// Multiple Data এর ক্ষেত্রে
export const addToDb = (id) => {
    let shoppingCart;

    // get the shoppingCart
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }else{
        shoppingCart = {}
    }

    // add quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    }else{
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

export const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

export const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

// total price function inside fakedb
const getTotalPrice = (products) => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer,0)
    return total
}

export {getTotalPrice as getTotal}

