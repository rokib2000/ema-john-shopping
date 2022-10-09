import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // get product 
    const productsData = await fetch('products.json');
    const products = await productsData.json()

    // get cart 
    const saveCart = getStoredCart();
    // console.log('saveCart', saveCart);
    const initialCart = [];

    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        // console.log(id, addedProduct);
        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {products: products, initialCart: initialCart};
}