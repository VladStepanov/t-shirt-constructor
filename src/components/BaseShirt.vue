<template>
  <div class="base-shirt">
    <svg class="base-shirt__svg" :viewBox="`0 0 ${viewBox[side].x} ${viewBox[side].y}`">
      <path
        v-for="(path, role, i) in paths"
        :key="`${role}-${i}`"
        :d="path"
        :fill="colorized && colors[curRule][role]"
      />
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseShirt',
  props: {
    paths: { type: Object, required: true },
    colorized: { type: Boolean, default: false },
    side: { type: String, required: true },
    viewBox: {
      type: Object,
      validator: (viewBox) => {
        return (
          Object.values(viewBox.front).every((axis) => axis !== undefined) &&
          Object.values(viewBox.rear).every((axis) => axis !== undefined)
        )
      }
    }
  },
  computed: {
    ...mapState(['colors']),
    ...mapState({
      curRule: state => state.colors.curRule
    })
  }
}
</script>

<style scoped lang="scss">
.base-shirt {
  &__svg {
    width: 100%;
  }
}
</style>
