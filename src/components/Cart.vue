<template>
    <div>
        <Sheet modal :update="useCartStore().setCartVisible()" :default-open="useCartStore().isCartVisible" :open="useCartStore().isCartVisible" >
           
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{{ props.title }}</SheetTitle>
                    <SheetDescription>
                        {{ props.description }}
                    </SheetDescription>
                </SheetHeader>
                <slot name="Body" />
                <SheetFooter>
                    <SheetClose as-child>
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

</script>

