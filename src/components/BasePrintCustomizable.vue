<template>
  <div
    class="print-customizable"
    :class="classes"
  >
    <BasePrint v-on="$listeners" v-bind="$props" />
  </div>
</template>

<script>
import BasePrint, { props } from '@/components/BasePrint'

export default {
  name: 'BasePrintCustomizable',
  props: {
    ...props,
    position: {
      type: Object,
      default: () => ({}),
      validator: (pos) => pos.x !== undefined && pos.y !== undefined }
  },
  computed: {
    classes () {
      return {
        ...this.positionClasses
      }
    },
    positionClasses () {
      const { x, y } = this.position

      return {
        [[x, y].filter(Boolean).join(' ')]: x || y
      }
    }
  },
  components: { BasePrint }
}
</script>

<style scoped lang="scss">
.print-customizable {
  position: absolute;
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
