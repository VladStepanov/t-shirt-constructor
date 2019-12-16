<template>
  <div class="menu">
    <div class="menu__title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  border: 1px solid #ccc;
  padding: 12px;
  position: relative;
  &__title {
    position: absolute;
    left: 12px;
    top: 0;
    transform: translateY(calc(-50% - 6px));
    background-color: #fff;
    padding: 12px 12px 0;
  }
}
</style>
