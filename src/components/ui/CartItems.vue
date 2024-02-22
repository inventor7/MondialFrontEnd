<template>
    <div class=" flex flex-col justify-start items-center h-full w-full gap-1  " >
          <CartItem v-for="item in shoppingCart" :key="item.id" :item="item" />
    </div>
   
</template>

<script setup >
import { useCartStore } from '@/store/cartStore';

const {shoppingCart } = useCartStore();

</script>