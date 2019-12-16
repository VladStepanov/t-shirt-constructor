<template>
  <div class="menu">
    <MenuShirts />
    <MenuPrints />
  </div>
</template>

<script>
import MenuShirts from '@/components/MenuShirts/MenuShirts'
import MenuPrints from '@/components/MenuPrints/MenuPrints'

export default {
  name: 'Menu',
  components: {
    MenuShirts,
    MenuPrints
  }
}
</script>

<style scoped lang="scss">
.menu {
  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
}
</style>
