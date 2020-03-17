<template>
  <q-layout view="HHH LPR LFF"  class="shadow-2 rounded-borders">
    <q-header elevated class="bg-gradient-primary">
      <q-toolbar>
        <q-avatar>
          <img src="statics/log.png">
        </q-avatar>
        <q-toolbar-title>IC-Shadoof</q-toolbar-title>
        </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      content-class="blue"
    >
      <q-list>
        <q-item active-class="text-blue" clickable tag="a" to="/" exact>
          <q-item-section avatar>
            <q-icon name="exit_to_app" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="text-blue" clickable tag="a" to="/locationdeviceactive">
          <q-item-section avatar>
            <q-icon name="location_on" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Location of Active Devices</q-item-label>
          </q-item-section>
        </q-item>
        <q-item active-class="text-blue" clickable tag="a" to="/about">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
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
    openURL
  }
}
</script>

<style>
</style>
