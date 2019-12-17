<template>
  <div class="select-print" v-bind="$attrs" v-on="listeners">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'MenuPrintsSelectedItem',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    listeners () {
      return { ...this.$listeners, click: this.clickHandler }
    }
  },
  methods: {
    clickHandler () {
      this.$emit('click', this.id)
    }
  }
}
</script>

<style scoped lang="scss">
.select-print {
  margin: 6px 12px;
}
</style>
