<template>
  <v-app>
    <v-toolbar fixed app class="nav-bar">
      <v-toolbar-title v-text="title" class="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
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
.nav-bar {
  font-size: 16px;
  height: 80px;
}

.title {
  font-size: 2em;
}

.nav-link {
  padding-left: 20px;
  font-size: 2em;
}
</style>
