<template>
  <div
    class="base-print"
    v-on="$listeners"
    v-bind="$attrs"
    :style="styles"
  >
    <svg preserveAspectRatio="xMidYMid meet" :viewBox="viewBoxExpr">
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
  viewBox: { type: Object, validator: size => size.x && size.y },
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
    viewBoxExpr () {
      const { viewBox, initSize } = this
      return `0 0 ${viewBox?.x ?? initSize.x} ${viewBox?.y ?? initSize.y}`
    },
    calculatedSize () {
      return this.$store.getters['prints/calcSize'](this.aspectRatio, this.width)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
