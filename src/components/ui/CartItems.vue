<template>
    <div class=" flex flex-col justify-start items-center h-full w-full gap-1  ">
        <CartItem v-for="item in useCartStore().$state.shoppingCart" :key="item.id" :item="item" />

    </div>
</template>

<script setup >
import { useCartStore } from '@/store/cartStore';
import { storeToRefs } from 'pinia';
import { toRefs } from 'vue';

</script>