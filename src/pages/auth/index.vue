<template>
    <ClientLayout>
        <!-- login form -->
        <div class=" flex flex-col justify-center items-center w-full  h-[90vh]  px-4 ">

            <div class=" flex flex-col justify-start items-center w-full h-fit space-y-10  ">
                <svg class=" w-20 h-20 lg:w-8 lg:h-8 " viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.196 15.485C5.046 14.873 5.948 14.3893 6.902 14.034C7.85533 13.678 8.888 13.5 10 13.5C11.1113 13.5 12.144 13.678 13.098 14.034C14.0513 14.3893 14.9533 14.8727 15.804 15.484C16.464 14.8013 16.995 13.9947 17.397 13.064C17.799 12.132 18 11.1107 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.105 2.77833 12.2173 1.99933 10 2C7.78333 2 5.89567 2.77933 4.337 4.338C2.77833 5.89667 1.99933 7.784 2 10C2 11.1113 2.201 12.1323 2.603 13.063C3.005 13.9943 3.536 14.8017 4.196 15.485ZM10.001 10.5C9.15833 10.5 8.44733 10.2107 7.868 9.632C7.28933 9.054 7 8.34367 7 7.501C7 6.65833 7.28933 5.94733 7.868 5.368C8.446 4.78933 9.15633 4.5 9.999 4.5C10.8417 4.5 11.5527 4.78933 12.132 5.368C12.7107 5.946 13 6.65633 13 7.499C13 8.34167 12.7107 9.05267 12.132 9.632C11.554 10.2107 10.8437 10.5 10.001 10.5ZM10 19C8.74467 19 7.56967 18.7663 6.475 18.299C5.38033 17.8323 4.42767 17.1937 3.617 16.383C2.807 15.5723 2.16833 14.6197 1.701 13.525C1.23367 12.4303 1 11.2553 1 10C1 8.74467 1.23367 7.56967 1.701 6.475C2.16767 5.38033 2.80633 4.42767 3.617 3.617C4.42767 2.807 5.38033 2.16833 6.475 1.701C7.56967 1.23367 8.74467 1 10 1C11.2553 1 12.4303 1.23367 13.525 1.701C14.6197 2.16767 15.5723 2.80633 16.383 3.617C17.193 4.42767 17.8317 5.38033 18.299 6.475C18.7663 7.56967 19 8.74467 19 10C19 11.2553 18.7663 12.4303 18.299 13.525C17.8323 14.6197 17.1937 15.5723 16.383 16.383C15.5723 17.193 14.6197 17.8317 13.525 18.299C12.4303 18.7663 11.2553 19 10 19ZM10 18C10.922 18 11.829 17.8387 12.721 17.516C13.6137 17.194 14.385 16.7527 15.035 16.192C14.385 15.6707 13.633 15.2583 12.779 14.955C11.9257 14.6517 10.9993 14.5 10 14.5C9.00133 14.5 8.072 14.6483 7.212 14.945C6.352 15.2417 5.603 15.6573 4.965 16.192C5.615 16.752 6.38633 17.1933 7.279 17.516C8.171 17.8387 9.078 18 10 18ZM10 9.5C10.5613 9.5 11.035 9.307 11.421 8.921C11.807 8.535 12 8.06133 12 7.5C12 6.93867 11.807 6.465 11.421 6.079C11.035 5.693 10.5613 5.5 10 5.5C9.43867 5.5 8.965 5.693 8.579 6.079C8.193 6.465 8 6.93867 8 7.5C8 8.06133 8.193 8.535 8.579 8.921C8.965 9.307 9.43867 9.5 10 9.5Z"
                        fill="black" />
                </svg>
                <form class="flex flex-col justify-center items-center w-full h-full space-y-6" action="" method="post"
                    @submit.prevent="handleLogin()">
                    <div class="space-y-2 w-full ">
                        <Input class=" h-10 " v-model="form.email" type="email" autocomplete="email" required
                            placeholder="Email..." />
                        <span class="text-red-600 text-start w-full text-sm " v-if="Object.keys(error).length !== 0">{{
                            error.validation.email
                        }}</span>
                    </div>


                    <div class="space-y-2 w-full ">
                        <Input class=" h-10 " v-model="form.password" autocomplete="current-password" required
                            type="password" placeholder="Password..." />
                        <span class="text-red-600 w-full text-start  text-sm" v-if="Object.keys(error).length !== 0">{{
                            error.validation.password
                        }}</span>
                    </div>

                    <Button class=" w-full ">
                        Login
                        <span v-if="loading">
                            ...
                        </span>
                    </Button>

                    <router-link to="/auth/register" class=" w-full ">
                        <Button variant="ghost" class=" w-full ">
                            Register
                        </Button>
                    </router-link>

                </form>
            </div>
        </div>

    </ClientLayout>
</template>

<script setup>
import axios from "../../assets/lib/axios";
import { useRouter } from "vue-router";

let router = useRouter();
let res = ref('');
let error = ref({})
let loading = ref(false)
let form = ref({
    email: "",
    password: "",
});

// to do comments

let isEmailValid = computed(() => {
    return form.value.email.length >= 6
})

let isPasswordValid = computed(() => {
    return form.value.password.length >= 6

})


const handleLogin = async () => {
    if (isEmailValid.value && isPasswordValid.value) {
        loading.value = true
        await axios.get("/sanctum/csrf-cookie");
        try {
            res.value = await axios.post("/login", form.value);
            router.push("/");

        } catch (err) {
            error.value = err
            console.log('errorss', err)
        }

        loading.value = false

    } else {
        error.value = {
            validation: {
                email: "all the field are re"
            }
        }
    }
};
</script>
