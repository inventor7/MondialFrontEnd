<template>
    <div>
        <Sheet :open="isCartVisible" :default-open="isCartVisible" v-on:update:open="setCartInVisible"  modal>
            <SheetContent class=" pt-12 w-full" >
               
                <SheetHeader>
                    <SheetTitle>{{ props.title }}</SheetTitle>
                    <SheetDescription>
                        {{ props.description }}
                    </SheetDescription>
                </SheetHeader>
                <slot class=" mt-4 " name="Body" />
                <SheetFooter>
                    <SheetClose>
                        <slot name="ButtonClose" />
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';
const props = defineProps({
    title: String,
    description: String
})

const { toggleCartVisibility, setCartInVisible, setCartVisible } = useCartStore();
const { isCartVisible } = toRefs(useCartStore());

</script>

