<template>
  <div class="menu">
    <MenuShirts />
    <MenuPrints v-if="haveCurModel" />
  </div>
</template>

<script>
import MenuShirts from '@/components/MenuShirts/MenuShirts'
import MenuPrints from '@/components/MenuPrints/MenuPrints'
import { mapGetters } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters(['haveCurModel'])
  },
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
