<template>
  <div
    class="base-print"
    v-on="$listeners"
    v-bind="$attrs"
    :style="styles"
  >
    <svg preserveAspectRatio="xMidYMid meet" :viewBox="`0 0 ${initSize.x} ${initSize.y}`">
      <defs>
        <pattern :id="id" patternUnits="userSpaceOnUse" width="100" height="100">
          <image v-bind="{ 'xlink:href': pathToPattern }" />
        </pattern>
      </defs>
      <path
        v-for="(path) in paths"
        :key="path"
        :d="path"
        :fill="`url(#${id})`"
      />
    </svg>
  </div>
</template>

<script>
import uuid from 'uuid/v4'

export const props = {
  paths: { type: Array, required: true },
  initSize: { type: Object, validator: size => size.x && size.y },
  color: { type: String },
  texture: { type: String },
  width: { type: Number, required: true },
  aspectRatio: { type: Number, required: true }
}

export default {
  name: 'BasePrint',
  props,
  data: () => ({
    id: uuid()
  }),
  computed: {
    pathToPattern () {
      if (!this.color) {
        return require(`@/assets/templates/${this.texture}.jpg`)
      }
      // return require(`@/assets/templates/reflect-yellow.jpg`)
      return require(`@/assets/templates/${this.texture}-${this.color}.jpg`)
    },
    styles () {
      return {
        width: `${this.calculatedSize.width}px`,
        height: `${this.calculatedSize.height}px`
      }
    },
    calculatedSize () {
      return {
        width: this.width,
        height: this.width / this.aspectRatio
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
