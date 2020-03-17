<template>
  <div class="q-pa-md">
    <q-card class="my-card bg-white text-black">
      <q-card-section class="text-center">
          <img src="statics/log.png" style="height: 100px;max-width: 150px;"/>
          <div class="text-h6" align="center">User Table</div>
        </q-card-section>
      <q-table
        :data="data"
        :columns="columns"
        row-key="guid"
        v-model="color"
        val="cyan"
        color="cyan"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="guid" :props="props">{{ (props.row.guid) }}</q-td>
            <q-td key="no_ktp" :props="props">{{ (props.row.no_ktp) }}</q-td>
            <q-td key="nama" :props="props">{{ (props.row.nama) }}</q-td>
            <q-td key="no_hp" :props="props">{{ (props.row.no_hp) }}</q-td>
            <q-td key="email" :props="props">{{ (props.row.email) }}</q-td>
            <q-td key="alamat" :props="props">{{ (props.row.alamat) }}</q-td>
            <q-td key="action" :props="props">
              <q-card-actions align="around" class="row q-col-gutter-md no-wrap">
                <div class="col">
                  <q-btn flat round color="accent" :to="`/info/`+props.row.guid" icon="info">
                    <q-tooltip content-class="bg-blue-grey-14" transition-show="flip-right" transition-hide="flip-left" anchor="top middle" self="bottom middle" :offset="[10, 10]">
                      <div class="text-white text-caption">Lihat Device</div>
                    </q-tooltip>
                  </q-btn>
                </div>
              </q-card-actions>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [null],
      selected: [],
      submitting: false,
      color: [ 'cyan' ],
      columns: [
        {
          name: 'guid',
          label: 'GUID Pengguna',
          align: 'center',
          field: 'guid'
        },
        { name: 'no_ktp', align: 'center', label: 'Nomor KTP', field: 'no_ktp', sortable: true },
        { name: 'nama', align: 'center', label: 'Nama Lengkap', field: 'nama' },
        { name: 'no_hp', align: 'center', label: 'Nomor HP', field: 'no_hp' },
        { name: 'email', align: 'center', label: 'E-Mail', field: 'email' },
        { name: 'alamat', align: 'center', label: 'Alamat', field: 'alamat' },
        { name: 'action', align: 'center', label: 'Aksi', field: 'action' }
      ],
      data: [
        {
          guid: this.guid,
          no_ktp: this.no_ktp,
          nama: this.nama,
          no_hp: this.no_hp,
          email: this.email,
          alamat: this.alamat
        }
      ]
    }
  },
  mounted () {
    try {
      this.$axios.get('/users/get').then(response => {
        this.userss = [
          response.data.guid,
          response.data.no_ktp,
          response.data.nama,
          response.data.no_hp,
          response.data.email,
          response.data.alamat]

        this.data = (response.data)
        console.log(response.data)
      })
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? 'name' : `${this.selected.length} record${this.selected.length > 1 ? 's' : 'guiid'} selected of ${this.data.length}`
    }
  }
}
</script>
