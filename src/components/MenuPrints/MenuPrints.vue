<template>
  <BaseMenu title="Принты">
    <MenuPrintsFirstLine />
  </BaseMenu>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import MenuPrintsFirstLine from '@/components/MenuPrints/MenuPrintsFirstLine'

export default {
  name: 'MenuPrints',
  components: {
    BaseMenu,
    MenuPrintsFirstLine
  }
}
</script>

<style scoped lang="scss">

</style>
