<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :event="loadedEvent" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  layout: "admin",
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return context.app.$axios
      .$get(
        process.env.baseUrl + "/posts/" +
          context.params.postId +
          ".json"
      )
      .then(data => {
        return {
          loadedEvent: { ...data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
