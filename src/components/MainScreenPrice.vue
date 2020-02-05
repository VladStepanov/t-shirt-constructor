<template>
  <div class='price'>
    <span>{{ this.$store.getters.globalPrice }} руб</span>
  </div>
</template>

<script>
export default {
  name: 'MainScreenPrice'
}
</script>

<style lang="scss" scoped>
.price {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
