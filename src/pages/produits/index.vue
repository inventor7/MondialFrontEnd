<template>
    <ClientLayout>
        <div class="grid grid-cols-1  md:grid-cols-2  row-auto px-2 gap-8 ">
            <ProductsSkeleton v-if="loading" />
            <Product v-else v-for="prod in products " :key="prod.id" :product="prod" />
        </div>

        <!-- Load More -->
        <div class="flex justify-center items-center gap-4">
            <Button @click="useProductStore().fetchProducts()" class="bg-blue-500 text-white p-2 rounded-md w-full sm:w-1/2 xl:w-1/3 mt-4">Load
                More</Button>
        </div>

    </ClientLayout>
</template>

<script setup >
import { useProductStore } from '../../store/productStore'
import { onMounted, toRefs } from 'vue'

// store
const { products, loading } = toRefs(useProductStore())


onMounted(() => {
    useProductStore().fetchProducts()
})

</script>
