<template>
    <div class=" w-full px-2 ">
        <Navbar />
        <slot />



        <!-- cart -->
        <Cart  class=" flex sm:hidden " title="Cart" description="khlss">
            <template v-slot:ButtonClose>
                <Button>
                    Close Modal
                </Button>
            </template>
        </Cart>
    </div>
</template>

<script setup>

</script>
