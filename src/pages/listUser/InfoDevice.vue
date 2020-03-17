<template>
  <div class="q-pa-md">
    <q-card class="my-card bg-white text-black">
      <q-card-section class="text-center">
        <img src="statics/log.png" style="height: 100px;max-width: 150px;"/>
        <div class="text-h6" align="center">User Device Table</div>
      </q-card-section>

      <q-table
        :data="data"
        :columns="columns"
        v-model="color"
        val="cyan"
        color="cyan"
      />
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      devices: [],
      color: [ 'cyan' ],
      columns: [
        {
          name: 'guid',
          label: 'GUID Pengguna',
          align: 'center',
          field: 'guid'
        },
        { name: 'devices_name', align: 'center', label: 'Nama Device', field: 'devices_name', sortable: true },
        { name: 'devices_code', align: 'center', label: 'Kode Device', field: 'devices_code' },
        { name: 'device_activation_date', align: 'center', label: 'Waktu Aktivasi Device', field: 'device_activation_date' },
        { name: 'device_registration_date', align: 'center', label: 'Waktu Mendaftarkan Device', field: 'device_registration_date' }
      ],
      data: [
        {
          guid: this.guid,
          devices_name: this.devices_name,
          devices_code: this.devices_code,
          devices_activation_date: this.devices_activation_date,
          devices_registration_date: this.devices_registration_date
        }
      ]
    }
  },
  mounted () {
    try {
      this.$axios.get('/detaildevice/get?guid=' + this.$route.params.guid).then(response => {
        this.devices = [
          response.data.guid,
          response.data.devices_name,
          response.data.devices_code,
          response.data.devices_activation_date,
          response.data.devices_registration_date]

        this.data = (response.data)
        console.log(this.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
