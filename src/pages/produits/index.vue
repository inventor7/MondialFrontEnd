<template>
    <ClientLayout>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  row-auto  sm:gap-3  lg:gap-6 ">
            <Error v-if="error.status" :message="error.message" class=" w-full h-full max-h-screen"  />
            <ProductsSkeleton v-if="loading && !error.status" />
            <Product v-else v-for="prod in products " :key="prod.id" :product="prod" />
        </div>



        <!-- Load More -->
        <div v-if="!loading && !error.status" class="flex justify-center items-center gap-4">
            <Button @click="useProductStore().fetchProducts()" class="bg-blue-500 text-white p-2 rounded-md w-full sm:w-1/2 xl:w-1/3 mt-4">Load
                More</Button>
        </div>

    </ClientLayout>
</template>

<script setup >
import { useProductStore } from '../../store/productStore'
import { onMounted, toRefs } from 'vue'

// store
const { products, loading , error } = toRefs(useProductStore())


onMounted(() => {
    useProductStore().fetchProducts()
})

</script>
