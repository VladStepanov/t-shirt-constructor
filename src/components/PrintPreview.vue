<template>
  <div
    class="svg-container"
    :style="{ width: `${calculatedSize.x}px`, paddingBottom: `${calculatedSize.y}px` }"
  >
      <svg class="svg" preserveAspectRatio="xMinYMin meet" viewbox="0 0 150 60">
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
import { mapGetters } from 'vuex'

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
    }
  },
  computed: {
    ...mapGetters({
      curPrintSize: 'prints/curPrintSizeRender'
    }),
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
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, .2);
  &-container {
    display: inline-block;
    position: relative;
    overflow: hidden;
  }
}
</style>
