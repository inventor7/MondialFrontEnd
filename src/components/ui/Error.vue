<template>
    <div class=" flex flex-col justify-center items-center bg-gray-200/20 h-full w-full p-2  " >
        <p class=" text-red-700" >{{ message }}</p>
    </div>
</template>

<script setup >

const props = defineProps({
    message : {
        type : String,
    }
})

</script>