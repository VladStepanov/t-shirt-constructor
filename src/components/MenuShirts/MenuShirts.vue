<template>
  <BaseMenu title="Футболка">
    <MenuFilters />
    <MenuColors />
    <MenuPrice />
  </BaseMenu>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import MenuFilters from '@/components/MenuShirts/MenuShirtsFilters'
import MenuColors from '@/components/MenuShirts/MenuColors'
import MenuPrice from '@/components/MenuShirts/MenuShirtPrice'

export default {
  name: 'MenuShirts',
  components: {
    BaseMenu,
    MenuFilters,
    MenuColors,
    MenuPrice
  }
}
</script>

<style scoped lang='scss'>

</style>
