<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedEvent.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedEvent.title">Title</AppControlInput>
    <AppControlInput v-model="editedEvent.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedEvent.content">Content</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedEvent.previewText">Preview Text</AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedEvent: this.event
        ? { ...this.event }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the event
      this.$emit('submit', this.editedEvent)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/signup");
    }
  }
};
</script>
