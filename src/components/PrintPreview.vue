<template>
  <div
    class="svg-container"
    :style="styles"
    :class="classes"
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
      validator: (size) => size.x && size.y
    },
    id: {
      type: String,
      required: true
    },
    position: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    styles () {
      return {
        width: `${this.calculatedSize.x}px`,
        height: `${this.calculatedSize.y}px`
      }
    },
    classes () {
      const { x, y } = this.position

      return {
        [[x, y].filter(Boolean).join(' ')]: x || y
      }
    },
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
.centerX {
  left: 50%;
  transform: translateX(-50%);
}
.centerY {
  top: 50%;
  transform: translateY(-50%)
}
.centerX.centerY {
  @extend .centerX;
  @extend .centerY;
  transform: translate(-50%, -50%);
}

.top {
  top: 0;
}
.bottom {
  bottom: 0;
}

.right {
  right: 0;
}
.left {
  left: 0;
}
</style>
