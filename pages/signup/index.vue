<template>
  <div class="admin-page">
    <section class="new-event">
      <AppButton @click="$router.push('/events/new-event')">Create New Event</AppButton>
      <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-events">
      <h1>Existing Events</h1>
      <EventList
        isAdmin
        :events="loadedEvents" />
    </section>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  computed: {
    loadedEvents() {
      return this.$store.getters.loadedEvents;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/signup/auth");
    }
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-event {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-events h1 {
  text-align: center;
}
</style>
