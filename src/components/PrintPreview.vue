<template>
  <div
    class="svg-container"
    :style="{ width: `${calculatedSize.x}px`, height: `${calculatedSize.y}px` }"
  >
      <svg class="svg" preserveAspectRatio="xMidYMid meet" :viewBox="`0 0 ${initSize.x} ${initSize.y}`">
        <defs>
          <pattern :id="id" patternUnits="userSpaceOnUse" width="100" height="100">
            <image
              v-bind="{ 'xlink:href': pathToPattern }"
            />
          </pattern>
        </defs>
        <path
          v-for="(path, i) in paths"
          :key="i"
          :d="path"
          :fill="`url(#${id})`"
        />
    </svg>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

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
    texture: {
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
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    calculatedSize () {
      return {
        x: this.width,
        y: this.width / this.aspectRatio
      }
    },
    pathToPattern () {
      if (!this.color) {
        return require(`@/assets/templates/${this.texture}.jpg`)
      }
      // return require(`@/assets/templates/reflect-yellow.jpg`)
      return require(`@/assets/templates/${this.texture}-${this.color}.jpg`)
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
