<template>
  <v-app light>
    <v-toolbar fixed class="white">
      <v-toolbar-title v-text="title" class="logo"></v-toolbar-title>
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
	font-size: 12px;
	font-weight: 600;
	letter-spacing: .02em;
	margin-left: 16px;
	letter-spacing: 1px;
	white-space: nowrap;
	border: 1px solid #9a9a9a;
	/* color: white; */
	padding: .5rem;
	overflow: hidden;
	background: #ffffff;
	text-overflow: ellipsis;
	text-transform: uppercase;
}
</style>
