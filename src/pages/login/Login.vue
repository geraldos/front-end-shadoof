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
          <img src="statics/log.png" style="height: 100px;max-width: 150px;"/>
        </q-card-section>

        <q-card-section>
          <div class="text-blue text-center text-h4">IC-Shadoof</div>
          <div class="text-blue text-center subtitle">Silahkan Login Disini</div>
        </q-card-section>

        <q-form
        class="q-gutter-md"
        >

          <q-card-section>
            <q-input
            v-model="email"
            label="Email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Mohon untuk diisi' ]"
            >
              <template v-slot:append color="blue">
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
            type="password"
            class="q-pt-lg"
            v-model="password"
            label="Password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Mohon untuk diisi' ]"
            >
              <template v-slot:append>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section>
            <div class="col-md-3 col-xs-12 col-sm-12">
              <q-btn class="full-width" rounded flat to="/register" color="blue" label="Register" />
              <q-btn class="full-width" no-caps unelevated color="blue" @click="login()" label="Login"/>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      slide: 1
    }
  },
  methods: {
    async login () {
      try {
        await this.$axios.post('/admin/login', {
          email: this.email,
          password: this.password
        })
          .then(res => {
            if (res.data.sukses === false) {
              this.showNotif(res.data.msg, 'green')
              this.$q.localStorage.set('admin', res.data)
              this.$router.push('/registerdevice')
            } else {
              this.showNotif(res.data.msg, 'red')
            }
          })
      } catch (error) {
        console.log(error)
        this.showNotif(error.toString(), 'red')
      }
    },
    showNotif (message, jenis) {
      this.$q.notify({
        type: 'positive',
        message: message,
        color: jenis,
        timeout: 2000,
        actions: [{ icon: 'close', color: 'white' }]
      })
    }
  }
}
</script>
