import { defineStore } from 'pinia'
import axios from "../assets/lib/axios";


export const useProductStore = defineStore('product', () => {

    // loading and error handling
    const loading = ref(false)
    const error = reactive({
        message: '',
        status: false
    })


    //data

    const products = ref([])
    const currentPage = ref(1)
    const itemsPerPage = ref(10)

    // methods

    // fetch products
    const fetchProducts = async () => {
        try {

            loading.value = true
            const res = await axios.get('/api/products/', {
                params: {
                    page: currentPage.value,
                    itemsPerPage: itemsPerPage.value
                },
            })

            loading.value = false
            products.value = [...products.value, ...res.data.data]
            // add quantity to each product
            products.value.forEach(product => {
                product.quantity = 0
            })
            currentPage.value++

            return res

        } catch (err) {
            console.log(err)
            error.status = true,
                error.message = err?.message
        }




    }


    const findProductById = (productId) => {
        return products.find(product => product.id === productId)
    }




    return {

        //data
        products,
        loading,
        error,


        //methods
        findProductById,
        fetchProducts

    }
})