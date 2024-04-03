<template>
    <div class=" flex flex-row justify-start items-start w-full h-fit gap-4  ">
        <div class=" flex flex-col justify-between items-center w-full h-full">
            <img src="../../assets/images/1.png" alt="img">
            <div class=" flex flex-row justify-center items-center gap-1">
                <Button @click="useCartStore().addQuantity(item.id)" variant="icon">
                    <svg class=" w-4 h-4" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M1 6C1 3.2385 3.2385 1 6 1C8.7615 1 11 3.2385 11 6C11 8.7615 8.7615 11 6 11C3.2385 11 1 8.7615 1 6ZM6 2C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6C2 7.06087 2.42143 8.07828 3.17157 8.82843C3.92172 9.57857 4.93913 10 6 10C7.06087 10 8.07828 9.57857 8.82843 8.82843C9.57857 8.07828 10 7.06087 10 6C10 4.93913 9.57857 3.92172 8.82843 3.17157C8.07828 2.42143 7.06087 2 6 2Z"
                            fill="#737373" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.5 3.5C6.5 3.36739 6.44732 3.24021 6.35355 3.14645C6.25979 3.05268 6.13261 3 6 3C5.86739 3 5.74021 3.05268 5.64645 3.14645C5.55268 3.24021 5.5 3.36739 5.5 3.5V5.5H3.5C3.36739 5.5 3.24021 5.55268 3.14645 5.64645C3.05268 5.74021 3 5.86739 3 6C3 6.13261 3.05268 6.25979 3.14645 6.35355C3.24021 6.44732 3.36739 6.5 3.5 6.5H5.5V8.5C5.5 8.63261 5.55268 8.75979 5.64645 8.85355C5.74021 8.94732 5.86739 9 6 9C6.13261 9 6.25979 8.94732 6.35355 8.85355C6.44732 8.75979 6.5 8.63261 6.5 8.5V6.5H8.5C8.63261 6.5 8.75979 6.44732 8.85355 6.35355C8.94732 6.25979 9 6.13261 9 6C9 5.86739 8.94732 5.74021 8.85355 5.64645C8.75979 5.55268 8.63261 5.5 8.5 5.5H6.5V3.5Z"
                            fill="#737373" />
                    </svg>
                </Button>
                <span>{{ item.quantity }}</span>
                <Button @click="useCartStore().subtractQuantity(item.id)" variant="icon">
                    <svg class=" w-4 h-4" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_239)">
                            <path
                                d="M6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12ZM6 10.8C7.27304 10.8 8.49394 10.2943 9.39411 9.39411C10.2943 8.49394 10.8 7.27304 10.8 6C10.8 4.72696 10.2943 3.50606 9.39411 2.60589C8.49394 1.70571 7.27304 1.2 6 1.2C4.72696 1.2 3.50606 1.70571 2.60589 2.60589C1.70571 3.50606 1.2 4.72696 1.2 6C1.2 7.27304 1.70571 8.49394 2.60589 9.39411C3.50606 10.2943 4.72696 10.8 6 10.8ZM9 5.4V6.6H3V5.4H9Z"
                                fill="#737373" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_239">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Button>
            </div>
        </div>

       <div class=" flex flex-col justify-between items-start w-full h-full" >
         <div class=" flex flex-col justify-start items-start w-full h-full gap-2 ">
                <h1 class=" text-lg font-semibold">{{ item.name }}</h1>
                <p class=" text-xs ">#{{ item.id }}</p>
                <p class=" text-xs ">{{ item.price }} €</p>
            </div>
           <div class=" w-full flex justify-end"  >
                        <Button @click="useCartStore().removeProduct(item.id)" variant="link" class="text-red-600 text-xs " >remove</Button>
           </div>

       </div>
    </div>
     <Separator orientation="horizontal" />
    
</template>

<script setup >
import { useCartStore } from '@/store/cartStore';


const props = defineProps({
    item: Object
})


</script>