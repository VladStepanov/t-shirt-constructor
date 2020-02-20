<template>
  <div class="collision" :style="size">
    <slot />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PrintCollision',
  computed: {
    ...mapGetters(['curModelCollision']),
    size () {
      return {
        width: `${this.curModelCollision.width}px`,
        height: `${this.curModelCollision.height}px`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.collision {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
