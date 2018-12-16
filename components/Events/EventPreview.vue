<template>
  <nuxt-link :to="eventLink" class="event-preview">
    <article>
      <div
        class="event-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="event-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'EventPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    title: {
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
    eventLink() {
      return this.isAdmin ? '/signup/' + this.id : '/events/' + this.id
    }
  }
}
</script>


<style scoped>
.event-preview {
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
  .event-preview {
    width: 400px;
    margin: 10px;
  }
}

.event-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.event-content {
  padding: 10px;
  text-align: center;
}

a:hover .event-content,
a:active .event-content {
  background-color: #ccc;
}
</style>
