<template>
  <nuxt-link :to="groupLink" class="group-preview">
    <article>
      <div
        class="group-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="group-content">
        <h1>{{ name }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'GroupPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    groupLink() {
    //-   return this.isAdmin ? '/signup/' + this.id : '/events/' + this.id
      return '/groups/' + this.id
    }
  }
}
</script>


<style scoped>
.group-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .group-preview {
    width: 400px;
    margin: 10px;
  }
}

.group-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.group-content {
  padding: 10px;
  text-align: center;
}

a:hover .group-content,
a:active .group-content {
  background-color: #ccc;
}
</style>
