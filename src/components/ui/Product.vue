<template>
    <div class=" flex flex-col justify-start items-center w-full h-full gap-2 border p-2   ">
        <div class=" w-full h-full ">
            <img class=" h-full w-full object-cover object-center" src="@/assets/images/1.png" alt="img">
        </div>


        <div class=" flex flex-col justify-between h-full w-full gap-1 ">
            <h1 class=" text-lg md:text-xl font-bold ">{{ product.name }}</h1>
            <p class=" text-xs md:text-sm ">{{ product.price }} €</p>
            <Button @click="addproduct()" class=" bg-blue-500 text-white p-2 rounded-md w-full ">Ajouter au panier</Button>
        </div>

    </div>
</template>

<script setup >
import { useCartStore } from '@/store/cartStore';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const addproduct = () => {
    useCartStore().addProduct(props.product)
    useCartStore().setCartVisible()
}

</script>