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
      <q-card class="my-card bg-white text-black">
        <q-card-section class="text-center">
          <img src="statics/log.png" style="height: 75px;max-width: 120px;"/>
        </q-card-section>

        <q-card-section>
          <div class="text-blue text-center text-h4">IC-Shadoof</div>
        </q-card-section>

        <q-card-section>
          <div class="text-black text-center text-h5">{{about}}</div>
        </q-card-section>
      </q-card>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 1,
      about: 'IC-Shadoof adalah sistem pengairan cerdas berbabis IoT (Internet Of Things) yaitu alat pengairan yang dikontrol dengan menggunakan smartphone yang terhubung dengan sensor dan terintegrasi oleh internet sebagai otomatisasi sistemnya. '
    }
  }
}
</script>
