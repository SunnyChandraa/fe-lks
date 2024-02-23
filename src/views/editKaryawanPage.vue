<template>
  <div class="">
    <h1>Edit karyawan Page</h1>

    <div class="">
      <label for="nama_karyawan">Nama Karyawan:</label>
      <input type="text" id="nama_karyawan" name="nama_karyawan" v-model="formEdit.nama_karyawan" />
    </div>

    <div class="">
      <label for="alamat">Alamat:</label>
      <input type="text" id="alamat" name="alamat" v-model="formEdit.alamat" />
    </div>
    <button
      style="background-color: yellowgreen; width: 200px; height: 50px; margin-top: 50px"
      @click="updateKaryawan"
    >
      Edit Karyawan
    </button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const formEdit = ref({ nama_karyawan: null, alamat: null })

const updateKaryawan = async () => {
  const bodyReq = {
    idKaryawan: route.query.idKaryawan,
    namaKaryawan: formEdit.value.nama_karyawan,
    alamat: formEdit.value.alamat
  }
  await axios
    .put('http://localhost:8003/karyawan/updateKaryawan', bodyReq)
    .then((res: any) => {
      alert(res.data.message)
      router.push({ path: 'master-karyawan' })
    })
    .catch((err) => console.log(err))
}

const getDataById = async (idKaryawanFromRoute: number) => {
  await axios
    .get(`http://localhost:8003/karyawan/getKaryawanById?idKaryawan=${idKaryawanFromRoute}`)
    .then((res: any) => {
      formEdit.value.nama_karyawan = res.data.data.namaKaryawan
      formEdit.value.alamat = res.data.data.alamat
    })
    .catch((err) => console.log(err))
}

onMounted(async () => {
  const { idKaryawan }: any = route.query

  getDataById(idKaryawan)
})
</script>

<style></style>
