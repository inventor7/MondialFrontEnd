// a cart store

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

    //data
    const isCartVisible = ref(false)

    // function
    function setCartVisible() {
        isCartVisible.value = true
    }

    function setCartInVisible() {
        isCartVisible.value = false
    }

    return {

        // data
        isCartVisible,

        // functions
        setCartInVisible,
        setCartVisible
    }
})