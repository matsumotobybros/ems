<template>
  <div class="single-group-page">
    <section class="group">
      <h1 class="group-title">{{ loadedGroup.name }}</h1>
      <div class="group-details">
        <div class="group-detail">Last updated on {{ loadedGroup.updatedDate | date }}</div>
        <div class="group-detail">Written by {{ loadedGroup.author }}</div>
      </div>
      <p class="group-content">{{ loadedGroup.content }}</p>
    </section>
    <section class="group-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios.$get('/groups/' + context.params.id + '.json')
      .then(data => {
        return {
          loadedGroup: data
        }
      })
      .catch(e => context.error(e))
  },
  head: {
    title: 'A Blog Post'
  }
};
</script>


<style scoped>
.single-group-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.group {
  width: 100%;
}

@media (min-width: 768px) {
  .group {
    width: 600px;
    margin: auto;
  }
}

.group-title {
  margin: 0;
}

.group-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .group-details {
    flex-direction: row;
  }
}

.group-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.group-feedback a {
  color: red;
  text-decoration: none;
}

.group-feedback a:hover,
.group-feedback a:active {
  color: salmon;
}
</style>
