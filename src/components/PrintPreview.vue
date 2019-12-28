<template>
  <div class="svg-container">
    <svg class="svg" preserveAspectRatio="xMidYMid meet" viewbox='0 0 100 200'>
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
    size: {
      type: Object,
      validator (size) {
        return size.x && size.y
      }
    }
  }
}
</script>

<style scoped lang="scss">
.svg {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  &-container {
    display: inline-block;
    width: 100px;
    height: 200px;
    position: relative;
    background-color: rgba(0, 0, 0, .3);
  }
}
</style>
