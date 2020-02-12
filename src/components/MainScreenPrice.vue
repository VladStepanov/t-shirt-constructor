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
  text-align: center;
}
</style>
