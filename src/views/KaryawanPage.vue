<template>
  <div class="">
    <h1>Karyawan Page</h1>

    <table>
      <tr>
        <th>No</th>
        <th>Id User</th>
        <th>Nama Karyawan</th>
        <th>Alamat</th>
        <th>Aksi</th>
      </tr>
      <tr v-for="(item, index) in dataKaryawan" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.idKaryawan }}</td>
        <td>{{ item.namaKaryawan }}</td>
        <td>{{ item.alamat }}</td>
        <td>
          <button
            style="background-color: yellowgreen; width: 200px; height: 30px"
            @click="redirectToEditKaryawan(item.idKaryawan)"
          >
            Edit Karyawan
          </button>
        </td>
      </tr>
    </table>
    <RouterLink to="/add-karyawan">
      <button style="background-color: yellowgreen; width: 200px; height: 50px; margin-top: 50px">
        Tambah Karyawan
      </button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()

const dataKaryawan = ref<any[]>([])

const getDataKaryawan = async () => {
  await axios
    .get('http://localhost:8003/karyawan/showKaryawan')
    .then((res) => (dataKaryawan.value = res.data.data))
    .catch((err) => console.log(err))
}

const redirectToEditKaryawan = (idKaryawanFromTable: number) => {
  router.push({ path: '/edit-karyawan', query: { idKaryawan: idKaryawanFromTable } })
}

onMounted(async () => {
  getDataKaryawan()
})
</script>

<style>
table {
  /* margin-left: 50%; */
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin-left: 0px;
  margin-right: 0px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
