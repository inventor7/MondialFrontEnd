<template>
    <ClientLayout>
        <h1 class="  text-center " >Home Page</h1>
        <p>Home page content</p>

        {{ $t('hello') }}

        <select v-model="$i18n.locale">
            <option value="en">en</option>
            <option value="ar">ar</option>
        </select>
    </ClientLayout>
</template>

<script setup>
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(async() => {
  axios.defaults.withCredentials = true;
  
  await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
  
  await axios.post('http://127.0.0.1:8000/login', {
    email: 'test@example.com',
    password: 'password'
  });
  
  const {data} = await axios.get('http://127.0.0.1:8000/api/user');
  
  console.log(data); // should output user details.
})

</script>
