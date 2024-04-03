<template>
    <div
        :class="`group relative flex flex-col justify-end items-center w-full h-full font-liblaski cursor-pointer hover:scale-[1.02] transition-all duration-500 ease-in-out   ${category.styl}   `">

        <!-- each image has styl properety which is how much span and col has  -->
        <img :src="`src/assets/images/${category.id}.png`" alt="category"
            :class="` w-full h-full object-center   object-cover  border-2  hover:shadow-xl hover:border-black/40`" />
        <div
            class=" absolute flex flex-col justify-end items-start w-full h-full z-10   bg-transparent group-hover:bg-black/40  transition-all duration-500 ease-in-out  ">
            <div class=" flex flex-row justify-start items-center" >
                <h2
                    :class="` pl-2 py-2 md:pl-6 md:py-6 text-transparent group-hover:text-white font-bold text-lg whitespace-nowrap sm:text-xl md:text-2xl xl:text-4xl hover:underline cursor-pointer  transition-all duration-500 ease-in-out   `">
                    {{ category.name }}
                </h2>
                <!-- icon  -->
                <svg xmlns="http://www.w3.org/2000/svg"
                    class=" h-4 w-4 md:h-8 md:w-8 text-transparent group-hover:text-white  transition-all duration-500 ease-in-out"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>

        </div>

    </div>
</template>

<script setup>

const props = defineProps({
    category: Object
})

</script>