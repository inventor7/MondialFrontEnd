// a cart store

import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {

    //data
    const categories = ref([
        {
            id: 1,
            name: 'Chaise',
            styl: 'col-span-2 row-span-5'
        },
        {
            id: 2,
            name: 'Burau',
            styl: 'col-span-1 row-span-2'
        }, 
        {
            id: 3,
            name: 'Cuisine',
            styl: 'col-span-1 row-span-2'
        }, 
        {
            id: 4,
            name: 'Salon',
            styl: 'col-span-2 row-span-5'
        }, 
        {
            id: 5,
            name: 'Chambre a coucher',
            styl: 'col-span-2 row-span-5'
        }, 
        {
            id: 6,
            name: 'Armoire',
            styl: 'col-span-2 row-span-3'
        },
        {
            id: 7,
            name: 'Armoire',
            styl: 'col-span-4 row-span-5'
        },
       
    ])

    return {

        // data
        categories

        // functions
       
    }
})