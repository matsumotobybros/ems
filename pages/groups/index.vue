<template>
  <div class="group-page">
    <GroupList :groups="loadedGroups" />
  </div>
</template>

<script>
export default {
  middleware: 'log',
  computed: {
    loadedGroups() {
      return this.$store.getters.loadedGroups
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
