<template>
  <section class="group-list">
    <GroupPreview
      v-for="group in groups"
      :key="group.id"
      :id="group.id"
      :is-admin="isAdmin"
      :thumbnail="group.thumbnail"
      :name="group.name"
      :previewText="group.previewText" />
  </section>
</template>

<script>
import GroupPreview from '@/components/Groups/GroupPreview'

export default {
  components: {
    GroupPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    groups: {
      type: Array,
      required: true
    }
  }
}
</script>


<style scoped>

.group-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

