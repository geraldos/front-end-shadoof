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
      <q-item active-class="text-blue" clickable tag="a" to="/user" exact>
        <q-item-section avatar>
          <q-icon name="exit_to_app" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Back</q-item-label>
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

export default {
  name: 'LayoutDetail',
  data () {
    return {
      left: this.$q.platform.is.desktop,
      keyword: null
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
