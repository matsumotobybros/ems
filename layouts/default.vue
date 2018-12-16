<template>
  <div>
    <TheHeader :isAuthenticated="isAuthenticated" :onLogout="onLogout" @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :isAuthenticated="isAuthenticated" :onLogout="onLogout"
      :show="displaySidenav"
      @close="displaySidenav = false" />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'

export default {
  // middleware: 'log',
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySidenav: false
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }

}
</script>


<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
