<template>
  <div
    class="svg-container"
    :style="{ width: `${calculatedSize.x}px`, height: `${calculatedSize.y}px` }"
  >
      <svg class="svg" preserveAspectRatio="xMidYMid meet" :viewBox="`0 0 ${initSize.x} ${initSize.y}`">
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
    },
    aspectRatio: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    initSize: {
      type: Object,
      validator (size) {
        return size.x && size.y
      }
    }
  },
  computed: {
    calculatedSize () {
      return {
        x: this.width,
        y: this.width / this.aspectRatio
      }
    }
  }
}
</script>

<style scoped lang="scss">
.svg {
  display: inline-block;
  width: 100%;
  height: 100%;
  &-container {

  }
}
</style>
