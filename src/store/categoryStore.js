// a cart store

import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {

    //data
    const categories = ref([
        {
            id: 1,
            name: 'Chaise',
            img: ''
        },
        {
            id: 2,
            name: 'Burau',
            img: ''
        }, 
        {
            id: 3,
            name: 'Cuisine',
            img: ''
        }, 
        {
            id: 4,
            name: 'Salon',
            img: ''
        }, 
        {
            id: 5,
            name: 'Chambre a coucher',
            img: ''
        }, 
        {
            id: 6,
            name: 'Armoire',
            img: ''
        },
        {
            id: 7,
            name: 'Armoire',
            img: ''
        },
        {
            id: 8,
            name: 'Armoire',
            img: ''
        },
        {
            id: 9,
            name: 'Armoire',
            img: ''
        },
    ])

    return {

        // data
        categories

        // functions
       
    }
})