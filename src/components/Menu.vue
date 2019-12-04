<template>
  <div>
    <div class="menu">
      <div class="menu__title">Футболка</div>
      <MenuFilters />
      <MenuColors />
    </div>
  </div>
</template>

<script>
import MenuFilters from '@/components/MenuFilters'
import MenuColors from '@/components/MenuColors'

export default {
  name: 'Menu',
  components: {
    MenuFilters,
    MenuColors
  }
}
</script>

<style lang='scss'>
.menu {
  border: 1px solid #ccc;
  padding: 12px;
  position: relative;
  &__title {
    position: absolute;
    left: 12px;
    top: 0;
    transform: translateY(-50%);
    background-color: #fff;
    padding: 12px;
  }
}
</style>
