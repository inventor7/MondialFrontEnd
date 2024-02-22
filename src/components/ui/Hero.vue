<template>
    <div class="relative  w-full h-full ">

        <Carousel class="relative w-full h-full   max-w-[100rem] " :opts="{
            loop: true,
        }" @init-api="setApi">

            <CarouselContent>
                <CarouselItem v-for="(_, index) in 5" :key="index">
                    <div class="relative max-h-[45rem] h-full min-h-[60vh] p-1 flex flex-col justify-center items-center">
                        <div class="absolute z-0 top-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent"></div>
                        <img class=" object-cover  w-full h-full" src="@/assets/images/bg-hero.jpg" alt="bg">
                    </div>


                </CarouselItem>

            </CarouselContent>

            <!-- text will be fade when carousel slide to the next one -->
            <div
                class=" absolute z-10 w-full h-1/2 md:h-2/3 space-y-8 flex flex-col justify-end items-center sm:items-start top-0 left-0  px-2 md:px-4  transition-opacity duration-300">

                <div class="flex flex-col justify-center items-start w-full h-1/3 text-center  sm:text-start ">
                    <h1 class=" w-full  text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold uppercase text-white">
                        Élégance Mondiale
                    </h1>
                    <p class=" text-xs sm:text-base w-full mt-2 mb-4 md:mb-1  text-white">
                        Découvrez notre collection de meubles et accessoires de décoration .
                    </p>
                </div>

                <Button @click="goToProducts()" class="w-full sm:w-auto" size="lg">

                    Shop Now
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" class="ml-2"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.8009 9.63016C19.8009 9.40919 19.7131 9.19728 19.5569 9.04103C19.4006 8.88478 19.1887 8.79699 18.9677 8.79695L12.3009 8.79695C12.1903 8.79503 12.0804 8.81516 11.9776 8.85617C11.8748 8.89718 11.7812 8.95825 11.7023 9.03581C11.6234 9.11337 11.5607 9.20587 11.5179 9.30792C11.4751 9.40996 11.4531 9.51951 11.4531 9.63016C11.4531 9.74081 11.4751 9.85036 11.5179 9.9524C11.5607 10.0545 11.6234 10.147 11.7023 10.2245C11.7812 10.3021 11.8748 10.3631 11.9776 10.4042C12.0804 10.4452 12.1903 10.4653 12.3009 10.4634L16.956 10.4634L9.15251 18.2669C8.99623 18.4232 8.90843 18.6351 8.90843 18.8561C8.90843 19.0772 8.99623 19.2891 9.15251 19.4454C9.30879 19.6017 9.52075 19.6895 9.74176 19.6895C9.96278 19.6895 10.1747 19.6017 10.331 19.4454L18.1345 11.6419L18.1345 16.297C18.1383 16.5155 18.2278 16.7237 18.3836 16.8769C18.5395 17.03 18.7492 17.1159 18.9677 17.1159C19.1862 17.1159 19.396 17.03 19.5519 16.8769C19.7077 16.7237 19.7971 16.5155 19.8009 16.297L19.8009 9.63016Z"
                            fill="white" />
                    </svg>

                </Button>
            </div>

            <div class="py-2 text-center text-sm text-muted-foreground">
                <!-- carousel indicator mini dots dynamic -->
                <div class="flex justify-center space-x-2">
                    <div v-for="i in totalCount" :key="i"
                        class="w-10 h-1 transition-all duration-300 ease-in-out rounded-full" @click="api?.scrollTo(i - 1)"
                        :class="i === current ? 'bg-primary' : 'bg-black/20'">

                    </div>
                </div>

            </div>
        </Carousel>


    </div>
</template>

<script setup >
import { watchOnce } from '@vueuse/core'
import { useRouter } from "vue-router";

let router = useRouter()


const api = ref(null)
const totalCount = ref(0)
const current = ref(0)

function setApi(val) {
    api.value = val
}




function goToProducts() {
    router.push('/produits')
}


watchOnce(api, (api) => {
    if (!api)
        return

    totalCount.value = api.scrollSnapList().length
    current.value = api.selectedScrollSnap() + 1

    api.on('select', () => {
        current.value = api.selectedScrollSnap() + 1
    })
})





</script>