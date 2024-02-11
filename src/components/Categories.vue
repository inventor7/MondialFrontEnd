<template>
    <div class="flex flex-row justify-start items-center gap-4 w-screen h-16 bg-white shadow-md ">
        <Category class="overflow-x-auto " :category="cat" v-for="cat in categoryStore.categories" />
    </div>
</template>

<script setup>
import { useCategoryStore } from '@/store/categoryStore';

// store
const categoryStore = useCategoryStore()

</script>