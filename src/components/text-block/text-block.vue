<template>
  <article class="text-block">
    <h3 class="text-block__title">{{ this.$props.title }}</h3>
    <p
      ref="textBlock"
      :class="this.showMore ? 'text-block__text text-block__overflow' : 'text-block__text'">
        {{ this.$props.summary }}
    </p>
    <button v-if="this.showMore" class="text-block__button" @click="toggleShowMore">Lees meer</button>
    <button v-if="!this.showMore" class="text-block__button" @click="toggleShowMore">Lees minder</button>
  </article>
</template>

<script>
export default {
  name: 'textBlock',
  props: {
    summary: String,
    title: String
  },
  data() {
    return {
      showMore: true,
    }
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore
    }
  }
}
</script>
