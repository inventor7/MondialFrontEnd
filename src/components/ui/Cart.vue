<template>
    <div>
        <Sheet :open="isCartVisible" :default-open="isCartVisible" v-on:update:open="setCartInVisible" modal>
            <SheetContent class=" flex flex-col h-full justify-start font-liblaski  pt-12 px-0 pb-0 w-full">

                <SheetHeader>
                    <SheetTitle>{{ props.title }}</SheetTitle>
                    <SheetDescription>
                        {{ props.description }}
                    </SheetDescription>
                </SheetHeader>

                <div class="h-[60vh] pb-28 overflow-y-scroll  w-full" >
                      <slot class="flex-1 h-full w-full  mt-4   " name="Body" />
                      <div class="h-[40vh]" >

                      </div>
                </div>
              
                <SheetFooter>

                    <div class=" absolute bottom-0 w-full h-fit p-1 shadow-xl border-t-2 gap-6 font-sans bg-white ">
                        <div class=" flex flex-col justify-between items-center gap-4 p-3 ">
                            <div class=" flex flex-row justify-between items-center w-full text-sm ">
                                <span class=" flex flex-row justify-start items-center gap-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M11.238 2.799c-.614.081-1.372.255-2.45.504l-1.229.284c-.91.21-1.538.356-2.017.52c-.463.159-.725.315-.922.513c-.198.197-.354.459-.513.922c-.164.479-.31 1.106-.52 2.017l-.284 1.228c-.249 1.079-.423 1.837-.504 2.451c-.08.598-.061 1.003.045 1.371c.105.368.304.721.688 1.186c.395.478.944 1.029 1.727 1.812l1.83 1.83c1.359 1.359 2.326 2.324 3.158 2.958c.814.622 1.41.855 2.015.855c.606 0 1.201-.233 2.016-.855c.831-.634 1.799-1.6 3.158-2.959c1.36-1.36 2.325-2.327 2.96-3.158c.62-.815.854-1.41.854-2.016c0-.605-.233-1.2-.855-2.015c-.634-.832-1.6-1.8-2.959-3.159l-1.83-1.83c-.782-.782-1.333-1.331-1.81-1.726c-.466-.384-.819-.583-1.187-.688c-.368-.106-.773-.124-1.37-.045m-.196-1.487c.717-.095 1.346-.092 1.98.09c.635.182 1.17.513 1.728.973c.54.446 1.14 1.046 1.891 1.797l1.896 1.896c1.31 1.31 2.348 2.348 3.05 3.27c.724.947 1.163 1.859 1.163 2.924c0 1.066-.439 1.978-1.162 2.925c-.703.922-1.74 1.96-3.051 3.27l-.08.08c-1.31 1.31-2.348 2.348-3.27 3.05c-.947.724-1.86 1.163-2.925 1.163c-1.065 0-1.977-.439-2.925-1.162c-.921-.703-1.959-1.74-3.27-3.051L4.173 16.64c-.75-.75-1.351-1.351-1.797-1.89c-.46-.559-.791-1.094-.973-1.728c-.182-.635-.185-1.264-.09-1.981c.091-.694.283-1.522.521-2.556l.3-1.303c.2-.863.362-1.567.555-2.128c.202-.587.455-1.08.871-1.496c.416-.416.91-.67 1.496-.87c.561-.194 1.265-.356 2.128-.555l1.303-.3c1.034-.24 1.862-.43 2.556-.522M9.49 7.995a1.25 1.25 0 1 0-1.768 1.768A1.25 1.25 0 0 0 9.49 7.995m-2.829-1.06a2.75 2.75 0 1 1 3.89 3.889a2.75 2.75 0 0 1-3.89-3.89m6.33 5.172a.88.88 0 0 0-.608.277c-.388.388-.286.775-.177.884c.11.109.497.21.884-.177c.784-.784 2.138-1.044 3.005-.177c.673.673.668 1.639.265 2.404a.75.75 0 0 1-1.04 1.045a2.202 2.202 0 0 1-1.472.232a.75.75 0 1 1 .302-1.47c.177.037.463-.02.708-.266c.387-.388.286-.775.177-.884c-.11-.109-.497-.21-.884.177c-.784.784-2.138 1.044-3.005.177c-.673-.673-.668-1.639-.265-2.404a.75.75 0 0 1 1.04-1.045c.34-.181.713-.277 1.085-.273a.75.75 0 0 1-.014 1.5"
                                            clip-rule="evenodd" />
                                    </svg>
                                    subtotal
                                </span>
                                <span>
                                    756000 DA
                                </span>
                            </div>

                            <div class=" flex flex-row justify-between items-center w-full text-sm ">
                                <span class=" flex flex-row justify-start items-center gap-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2">
                                            <path d="m9 14l6-6" />
                                            <circle cx="9.5" cy="8.5" r=".5" fill="currentColor" />
                                            <circle cx="14.5" cy="13.5" r=".5" fill="currentColor" />
                                            <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2l-2 2l-2-2l-2 2l-2-2z" />
                                        </g>
                                    </svg>
                                    Tax
                                </span>
                                <span>
                                    600 DA
                                </span>
                            </div>
                            <div class=" flex flex-row justify-between items-center w-full  text-sm">
                                <div class=" flex flex-col justify-start items-start gap-1">

                                    <Select>
                                        <SelectTrigger class="w-fit h-fit min-w-[100px] p-1 px-2 ">
                                            <SelectValue placeholder="Select a wilaya">
                                                <template #iconT>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                            viewBox="0 0 32 32">
                                                            <path fill="currentColor"
                                                                d="M0 6v2h19v15h-6.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H4v-5H2v7h3.156c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3H32v-8.156l-.063-.157l-2-6L29.72 10H21V6zm1 4v2h9v-2zm20 2h7.281L30 17.125V23h-1.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H21zM2 14v2h6v-2zm7 8c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2" />
                                                        </svg>
                                                    </span>
                                                </template>
                                            </SelectValue>
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectLabel> <span class=" flex flex-row justify-start items-center gap-2 ">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                            viewBox="0 0 32 32">
                                                            <path fill="currentColor"
                                                                d="M0 6v2h19v15h-6.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H4v-5H2v7h3.156c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3c1.852 0 3.398-1.281 3.844-3H32v-8.156l-.063-.157l-2-6L29.72 10H21V6zm1 4v2h9v-2zm20 2h7.281L30 17.125V23h-1.156c-.446-1.719-1.992-3-3.844-3c-1.852 0-3.398 1.281-3.844 3H21zM2 14v2h6v-2zm7 8c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m16 0c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2" />
                                                        </svg>
                                                    </span>
                                                    shipping
                                                </span>
                                            </SelectLabel>
                                            <SelectGroup>
                                                <SelectItem v-for="wilaya in wilayas" :value="wilaya.id">
                                                    {{ wilaya.name }}
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <span>
                                    500 DA
                                </span>
                            </div>

                            <div class=" text-xl font-semibold py-4 w-full text-center ">
                                10,500 DA
                            </div>

                        </div>
                        <div class=" w-full p-2">
                            <Button size="xl" class="flex flex-row justify-between items-center px-6 w-full font-sans ">
                                <span class=" text-base">Go to checkout</span>

                                <svg class=" w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.0218 6.71149L30.3082 16L21.0218 25.2886L19.5114 23.7782L26.225 17.0667H2.1333V14.9334H26.225L19.5114 8.22189L21.0218 6.71149Z"
                                        fill="white" />
                                </svg>
                            </Button>
                        </div>

                    </div>


                </SheetFooter>
            </SheetContent>
        </Sheet>

    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';
import { usewilayaStore } from '@/store/wilayaStore';

const props = defineProps({
    title: String,
    description: String
})

const { toggleCartVisibility, setCartInVisible, setCartVisible } = useCartStore();
const { wilayas } = usewilayaStore()
const { isCartVisible } = toRefs(useCartStore());

</script>

