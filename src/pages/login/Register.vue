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
      <q-card-section class="text-center">
        <img src="statics/log.png" style="height: 100px;max-width: 150px;"/>
      </q-card-section>

      <q-card-section>
        <q-card-section>
          <div class="text-blue text-center text-h4">SHADOOF</div>
          <div class="text-blue text-center subtitle">Silahkan daftar disini</div>
        </q-card-section>
      </q-card-section>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-card-section>
            <q-input
              v-model="nama"
              label="Nama Lengkap"
              hint="admin admin"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Mohon untuk diisi']"
            >
              <template v-slot:append>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              v-model="email"
              label="E-Mail"
              hint="admin@mail.com"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Mohon untuk diisi']"
            >
              <template v-slot:append>
                <q-icon name="email" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              label="Password"
              lazy-rules
              type="password"
              :rules="[ val => val && val.length > 0 || 'Mohon untuk diisi']"
            >
              <template v-slot:append>
                <q-icon name="lock" />
              </template>
            </q-input>
        </q-card-section>

        <q-card-section class="q-pb-lg">
          <div class="col-md-3 col-xs-12 col-sm-12">
            <q-btn class="full-width" label="Register" type="submit" color="blue"/>
          </div>
        </q-card-section>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      nama: null,
      email: null,
      password: null,
      slide: 1
    }
  },
  methods: {
    async onSubmit () {
      let data = {
        nama: this.nama,
        email: this.email,
        password: this.password
      }

      try {
        await this.$axios.post('/admin/register', data)
          .then(res => {
            console.log(res.data)
            if (res.data) {
              this.showNotif(res.data.msg, 'green')
              this.$router.push('/')
            } else {
              this.showNotif(res.data.msg, 'red')
            }
          })
      } catch (error) {
        this.showNotif(error.toString(), 'red')
      }
    },
    showNotif (message, jenis) {
      this.$q.notify({
        message: message,
        color: jenis,
        timeout: 2000,
        actions: [{ icon: 'close', color: 'white' }]
      })
    }
  }
}
</script>
