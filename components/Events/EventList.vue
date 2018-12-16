<template>
  <section class="event-list">
    <EventPreview
      v-for="event in events"
      :key="event.id"
      :id="event.id"
      :is-admin="isAdmin"
      :thumbnail="event.thumbnail"
      :title="event.title"
      :previewText="event.previewText" />
  </section>
</template>

<script>
import EventPreview from '@/components/Events/EventPreview'

export default {
  components: {
    EventPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    events: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>

.event-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

