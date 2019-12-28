<template>
  <div>
    <svg>
      <path
        v-for="(path, i) in paths"
        :key="i"
        :d="path"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PrintPreview',
  props: {
    paths: {
      type: Array,
      required: true
    },
    colorized: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">

</style>
