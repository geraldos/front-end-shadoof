<template>
  <q-layout view="HHH LPR LFF"  class="shadow-2 rounded-borders">
    <q-header elevated class="bg-gradient-primary">
      <q-toolbar>
        <q-avatar>
          <img src="statics/log.png">
        </q-avatar>
        <q-toolbar-title>IC-Shadoof</q-toolbar-title>

        <q-item clickable @click="logout()" active-class="text-blue">
          <q-item-section>
            <!-- <q-item-label>Keluar</q-item-label> -->
            <q-icon rounded name="exit_to_app" />
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      content-class="blue"
    >
      <q-list>
        <q-item active-class="text-blue" clickable tag="a" to="/registerdevice" exact>
          <q-item-section avatar>
            <q-icon name="add_box" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register Device</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="text-blue" clickable to="/user">
          <q-item-section avatar>
            <q-icon name="eva-people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>User List</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="text-blue" clickable tag="a" to="/peta">
          <q-item-section avatar>
            <q-icon name="location_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Device Location</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      left: this.$q.platform.is.desktop,
      keyword: null
    }
  },
  methods: {
    openURL,
    logout () {
      this.$q.localStorage.clear('user')
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
