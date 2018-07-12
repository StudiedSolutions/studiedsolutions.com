<template>
  <v-app light>
    <v-toolbar fixed class="white">
      <img src="public/dark_logo_transparent.svg" class="logo" alt="Studied Solutions" >
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-layout justify-center>
      <span>&copy; 2018 Studied Solutions, LLC.</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Studied Solutions'
      }
    }
  }
</script>

<style>
.logo {
  max-width: 206px;
  max-height: 48px;
}
</style>
