<template>
  <q-page padding class="flex">
    <q-card style="flex:1">
      <!-- nih map ini bakal di render kalo udah loaded atau kita udah dapet lat dan longnya biar nggak error karna awalnya lat longnya null -->
      <l-map :zoom="zoom" :center="center" v-if="loaded">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="[data.latitude, data.longitude]" v-for="(data, i) in listMarker" :key="i">
            <l-popup>{{ lahan + data.nama }}</l-popup>
          </l-marker>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      id: null,
      center: L.latLng(null),
      markerLatLng: [null],
      name: null,
      lahan: 'Lahan ',
      zoom: 12,
      url: 'http://vectormap.pptik.id/styles/klokantech-basic/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://vectormap.pptik.id">PPTIK-ITB</a> contributors',
      subdomains: ['a', 'b', 'c'],
      loaded: false,
      listMarker: null
    }
  },
  mounted () {
    try {
      this.$axios.get('http://localhost:5400/marker/get').then(response => {
        this.center = L.latLng(-6.917464, 107.619125)
        // this.markerLatLng = [ response.data[0].lat, response.data[0].lng, response.data[0].name ]
        this.name = (response.name)
        this.listMarker = response.data
        console.log(this.listMarker)
        this.loaded = true
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style>
</style>
