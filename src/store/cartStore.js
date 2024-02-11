// a cart store

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

    //data
    const isCartVisible = ref(false)

    // function
    const setCartVisible = () => {
        isCartVisible.value = true
    }

    const setCartInVisible = () => {
        isCartVisible.value = false
    }

    const toggleCartVisibility = () => {
        isCartVisible.value = !isCartVisible.value
    }

    return {

        // data
        isCartVisible,

        // functions
        setCartInVisible,
        setCartVisible,
        toggleCartVisibility
    }
})