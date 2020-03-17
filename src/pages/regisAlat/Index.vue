<template>
  <q-page padding class="flex">
    <q-card style="flex:1">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
      height="370px"
      widht="370px"
    >
      <q-carousel-slide :name="0" img-src="statics/FIX1.png"/>
      <q-carousel-slide :name="1" img-src="statics/TRY1.png"/>
      <q-carousel-slide :name="2" img-src="statics/TRY2.png"/>
    </q-carousel>
      <div class="q-pa-md">
        <q-card class="my-card bg-white text-black">
          <q-card-section class="text-center">
            <img src="statics/log.png" style="height: 50px;max-width: 75px;"/>
            <div class="text-h6" align="center">Register Device Table</div>
          </q-card-section>
          <q-table
            :data="data"
            :columns="columns"
            row-key="mac"
            :selected-rows-label="getSelectedString"
            selection="multiple"
            :selected.sync="selected"
            :filter="filter"
            v-model="color"
            val="cyan"
            color="cyan"
          >
            <template v-slot:top-right>
              <q-btn no-caps unelevated color="blue"
              icon-right="add_box"
              label="Register"
              type="submit"
              :loading="submitting"
              @click="saveData"
              />
            </template>
          </q-table>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card class="my-card bg-white text-black">
          <q-card-section class="text-center">
            <img src="statics/log.png" style="height: 50px;max-width: 75px;"/>
            <div class="text-h6" align="center">Registered Device Table</div>
          </q-card-section>
          <q-table
            :data="item"
            :columns="column"
            row-key="mac"
            :filter="filterr"
            v-model="color"
            val="cyan"
            color="cyan"
          >
            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th auto-width />
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td auto-width>
                  <q-btn size="sm" color="blue" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
                </q-td>
                <q-td
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                >
                  {{ col.value }}
                </q-td>
              </q-tr>
              <q-tr v-show="props.expand" :props="props" >
                <q-td colspan="100%">
                  <div class="col-10 q-pt-lg">
                    <div class="col-12 q-pt-md text-center">
                      <div class="text-h6" align="center">{{Mac + props.row.mac}}, {{dt + props.row.devicetype}}</div>
                    <qriously :value="props.row.mac" :size="200" />
                    </div>
                  </div>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-card>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import connect from '../configRMQ/mqtt'
export default {
  name: 'PageIndex',
  data () {
    return {
      name: null,
      filter: '',
      filterr: '',
      message: '',
      texts: '',
      mac: '',
      Mac: 'Mac Address:  ',
      dt: 'Device Type:  ',
      selected: [],
      color: [ 'cyan' ],
      submitting: false,
      height: 300,
      slide: 1,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      shadoof: 'Shadoof adalah sebuah sistem yang dirancang untuk perariran otomatis dengan menggunakan pendekatan IOT (Internet Of Think).',
      columns: [
        {
          name: 'mac',
          required: true,
          label: 'Mac Address',
          align: 'left',
          field: 'mac',
          sortable: true,
          headerClasses: 'bg-primary text-white'
        },
        { name: 'devicename', align: 'center', label: 'Device Name', field: 'devicename', sortable: true },
        { name: 'devicetype', align: 'center', label: 'Device Type', field: 'devicetype', sortable: true }
      ],
      column: [
        {
          name: 'mac',
          required: true,
          label: 'Mac Address',
          align: 'left',
          field: 'mac',
          sortable: true
        },
        { name: 'devicename', align: 'center', label: 'Device Name', field: 'devicename', sortable: true },
        { name: 'devicetype', align: 'center', label: 'Device Type', field: 'devicetype', sortable: true }
      ],
      data: [],
      item: [],
      options: {
        responsive: true
      }
    }
  },
  created () {
    connect.on('connect', function () {
      connect.subscribe('regisweb', function (err) {
        if (!err) {
          console.log('Subscribe Berhasil')
        } else if (err) {
          console.log(err)
        }
      })
    }).on('error', function (err) {
      console.log(err)
    })
    // let arrayEmpty = this.$q.localStorage.getItem('setData')
    // this.data = arrayEmpty
    // console.log(localStorage)
  },
  mounted () {
    this.getMessages()
    this.getData()
    // this.getDataMac()
  },
  methods: {
    saveData () {
      this.submitting = true
      this.$axios.post('/device/insert',
        this.selected)
        .then(response => {
          console.log(response.data)
          this.$q.notify({
            type: 'positive',
            message: `Berhasil Menyimpan Data`,
            color: 'blue',
            icon: 'done_all'
          })
        })
      setTimeout(() => {
        this.submitting = false
      }, 2000)
    },
    showNotif (message, jenis) {
      this.$q.notify({
        message: message,
        color: jenis,
        timeout: 2000,
        actions: [{ icon: 'close', color: 'white' }]
      })
    },
    getData () {
      try {
        this.$axios.get('/device/get').then(response => {
          this.devices = [
            response.data
          ]
          this.item = (response.data)
          console.log(response.data)
        })
      } catch (error) {
        console.log(error)
      }
    },
    getMessages () {
      connect.on('message', (topic, message) => {
        let Msg = JSON.parse(message.toString())
        console.log(Msg)

        let arrayEmpty = this.data
        arrayEmpty.push(Msg)

        this.data = arrayEmpty
        // this.$q.localStorage.set('setData', arrayEmpty)
        // this.data = this.$q.localStorage.getItem('setData')
      })
    },
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    }
  }
}

</script>

<style>
</style>
