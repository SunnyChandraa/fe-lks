<template>
  <div class="">
    <h1>Tambah karyawan Page</h1>

    <div class="">
      <label for="nama_karyawan">Nama Karyawan:</label>
      <input
        type="text"
        id="nama_karyawan"
        name="nama_karyawan"
        v-model="formAlamat.nama_karyawan"
      />
    </div>

    <div class="">
      <label for="alamat">Alamat:</label>
      <input type="text" id="alamat" name="alamat" v-model="formAlamat.alamat" />
    </div>
    <button
      style="background-color: yellowgreen; width: 200px; height: 50px; margin-top: 50px"
      @click="insertKaryawan"
    >
      Tambah Karyawan
    </button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import router from '@/router'

const formAlamat = ref({ nama_karyawan: null, alamat: null })

const insertKaryawan = async () => {
  const bodyReq = {
    namaKaryawan: formAlamat.value.nama_karyawan,
    alamat: formAlamat.value.alamat
  }

  await axios
    .post('http://localhost:8003/karyawan/addKaryawan', bodyReq)
    .then((res: any) => {
      alert(res.message)
      router.push({ path: 'master-karyawan' })
    })
    .catch((err) => console.log(err))
}
</script>

<style></style>
