// a cart store
import { defineStore } from 'pinia'

export const useCartStore = defineStore("cartStore", {
    id: "cart",
    state: () => ({
        //data
        isCartVisible: false,
        shoppingCart: [],
        shoppingItem: {
            id: 0,
            name: '',
            price: 0,
            quantity: 0
        }

    }),

    actions: {


        // Visibility methods
        setCartVisible() {
            this.isCartVisible = true
        },

        setCartInVisible() {
            this.isCartVisible = false
        },

        toggleCartVisibility() {
            this.isCartVisible = !this.isCartVisible
        },



        // Cart methods
        addQuantity(productId) {
            const product = this.shoppingCart.find(item => item.id === productId)
            if (product) {
                product.quantity++
            }
        },

        subtractQuantity(productId) {
            const product = this.shoppingCart.find(item => item.id === productId)
            if (product && product.quantity > 1) {
                product.quantity--
            }
        },

        removeProduct(productId) {
            const productIndex = this.shoppingCart.findIndex(item => item.id === productId)
            this.shoppingCart.splice(productIndex, 1)
        },

        addProduct(product) {
            console.log()
            const productIndex = this.shoppingCart.findIndex(item => item.id === product.id)
            if (productIndex === -1) {
                this.shoppingCart.push({ ...product, quantity: 1 })
            } else {
                this.shoppingCart[productIndex].quantity++
            }
        }

    },


    // persist the shopping cart in local storage
    // this will keep the cart data even after the page is refreshed

    persist: [
        {
            key: "cartStore",
            storage: localStorage,
            paths: [
                "shoppingCart",
            ],
        },
    ],



})