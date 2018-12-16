<template>
  <div class="events-page">
    <EventList :events="loadedEvents" />
  </div>
</template>

<script>
export default {
  middleware: 'log',
  computed: {
    loadedEvents() {
      return this.$store.getters.loadedEvents
    }
  }
};
</script>


<style scoped>
.events-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
