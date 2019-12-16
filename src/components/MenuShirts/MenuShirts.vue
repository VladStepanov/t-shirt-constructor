<template>
  <BaseMenu title="Футболка">
    <MenuFilters />
    <MenuColors />
    <span>Suitable models: {{ $store.getters['filters/suitableModels'].map(model => model.name) }}</span>
  </BaseMenu>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import MenuFilters from '@/components/MenuShirts/MenuShirtsFilters'
import MenuColors from '@/components/MenuShirts/MenuColors'

export default {
  name: 'MenuShirts',
  components: {
    BaseMenu,
    MenuFilters,
    MenuColors
  }
}
</script>

<style scoped lang='scss'>

</style>
