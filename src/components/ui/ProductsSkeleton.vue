<template>
    <div v-for="i in 10" :key="i" class=" flex flex-col justify-start items-center w-full h-full gap-2 border p-2  ">
        <Skeleton class="w-full aspect-video " />
        <div class=" flex flex-col justify-between w-full h-full gap-2  ">
            <Skeleton class="w-[100px] h-3 " />
            <Skeleton class="w-[50px] h-2 " />
            <Skeleton class="w-full h-8 " />
        </div>
    </div>
</template>

<script setup >

</script>