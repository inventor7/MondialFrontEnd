// a cart store

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

    //data
    const isCartVisible = ref(false)
    const shoppingCart = reactive([])


    // Visibility methods
    const setCartVisible = () => {
        isCartVisible.value = true
    }

    const setCartInVisible = () => {
        isCartVisible.value = false
    }

    const toggleCartVisibility = () => {
        isCartVisible.value = !isCartVisible.value
    }


    
    // Cart methods
    const addQuantity = (productId) => {
        const product = shoppingCart.find(item => item.id === productId)
        if (product) {
            product.quantity++
        }
    }

    const subtractQuantity = (productId) => {
        const product = shoppingCart.find(item => item.id === productId)
        if (product && product.quantity > 1) {
            product.quantity--
        }
    }

    const removeProduct = (productId) => {
        const index = shoppingCart.findIndex(item => item.id === productId)
        if (index !== -1) {
            shoppingCart.splice(index, 1)
        }
    }

    const addProduct = (product) => {   
        const index = shoppingCart.findIndex(item => item.id === product.id)
        if (index !== -1) {
            shoppingCart[index].quantity++
        } else {
            shoppingCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                quantity: 1
            })
        }
    }



    

    return {

        // data
        isCartVisible,
        shoppingCart,

        // visibility methods
        setCartInVisible,
        setCartVisible,
        toggleCartVisibility,

        // cart methods
        addQuantity,
        subtractQuantity,
        removeProduct,
        addProduct
        
    }
})