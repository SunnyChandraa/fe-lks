<template>
  <h1>Login Page</h1>

  <div class="">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" v-model="storeLogin.username" />
  </div>

  <div class="">
    <label for="password">Password:</label>
    <input type="text" id="password" name="password" v-model="storeLogin.password" />
  </div>

  <button style="background-color: yellowgreen; width: 200px; height: 50px" @click="getdata">
    Login
  </button>

  {{ storeLogin }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'

const getdata = async () => {
  if (!storeLogin.value.username || !storeLogin.value.password) {
    alert('user login belum diisi')
  }

  const bodyReq = {
    username: storeLogin.value.username,
    password: storeLogin.value.password
  }

  const data: any = await axios.post('http://localhost:8003/user/login', bodyReq)

  if (data.data.loginuser) {
    router.push({ path: 'master-karyawan' })
  }
  if (!data.data.loginuser && storeLogin.value.username && storeLogin.value.password) {
    alert('Username atau password salah')
  }
}

const storeLogin = ref({ username: null, password: null })
</script>
