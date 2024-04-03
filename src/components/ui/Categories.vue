<template>
    <!-- flexible grid first 2 and height of card is double the other artistic and responsive -->
    <div class=" grid grid-cols-4 grid-rows-[12]  gap-1 md:gap-3  xl:gap-5 max-w-full h-full  grid-flow-row-dense overflow-hidden ">
        <Category :class="` h-full w-full   ${cat.styl}`" :category="cat"
            v-for="cat in categoryStore.categories" />
    </div>
</template>

<script setup>
import { useCategoryStore } from '@/store/categoryStore';

// store
const categoryStore = useCategoryStore()

</script>