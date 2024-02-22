<template>
<div :class="`group relative flex flex-col justify-start items-center w-full h-full cursor-pointer hover:scale-[1.02] transition-all duration-500 ease-in-out   ${category.styl}   `">

    <!-- each image has styl properety which is how much span and col has  -->
   <img :src="`src/assets/images/${category.id}.png`" alt="category" :class="` w-full h-full object-center   object-cover  border-2  hover:shadow-xl hover:border-black/40`" /> 
   <div class=" absolute w-full h-full z-10   bg-transparent group-hover:bg-white/40 flex justify-center items-center transition-all duration-500 ease-in-out  ">
         <h2 :class="` text-transparent group-hover:text-black font-bold text-xl sm:text-xl md:text-2xl xl:text-3xl ml-2 hover:underline cursor-pointer  transition-all duration-500 ease-in-out   `">
              {{category.name}}
         </h2>
   </div>
 
</div>
</template>

<script setup>
                                                     
const props = defineProps({
    category : Object
})

</script>