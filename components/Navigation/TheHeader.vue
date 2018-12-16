<template>
<div class="header-container">
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">Events Manager</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/events">Events</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/groups">Groups</nuxt-link></li>
        <li v-show="!isAuthenticated" class="nav-item"><nuxt-link to="/signup">Sign in</nuxt-link></li>
        <li v-show="!isAuthenticated"  class="nav-item"><nuxt-link to="/signup">Sign up</nuxt-link></li>
        <li v-show="isAuthenticated"  class="nav-item"><nuxt-link to="/signup">Edit Host Events</nuxt-link></li>
        <li v-show="isAuthenticated"  class="nav-item"><AppButton class="loglogout-btn" @click="onLogout">Logout</AppButton></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  props: {
    isAuthenticated: {
      type: Boolean,
      required: true
    },
    onLogout: {
      type: Function,
      required: true
    }
  },
  components: {
    TheSideNavToggle
  }
  //- methods: {
  //-   onLogout() {
  //-     console.log('log out')
  //-   }
  //- }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}
.nav-item button {
  text-decoration: none;
}
.nav-item button:focus {
  outline: none;

}

.nav-item a:hover,
.nav-item button:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
  background-color: transparent;
}
</style>
