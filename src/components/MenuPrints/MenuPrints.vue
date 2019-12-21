<template>
  <BaseMenu title="Принты">
    <MenuPrintsFirstLine />
    <RadioComponentSwitcher v-if="curPrint" :list="typesWithComponent" v-model="type" />
    <component :is="determineComponent(typesWithComponent, curType)" />
    <button @click="selectPrint">Добавить</button>
    <MenuPrintsSelected v-if="haveSelected" />
  </BaseMenu>
</template>

<script>
import BaseMenu from '@/components/BaseMenu'
import MenuPrintsFirstLine from '@/components/MenuPrints/MenuPrintsFirstLine'
import MenuPrintsSelected from '@/components/MenuPrints/MenuPrintsSelected'
import MenuPrintsPrint from '@/components/MenuPrints/MenuPrintsPrint'
import MenuPrintsVinyl from '@/components/MenuPrints/MenuPrintsVinyl'
import RadioComponentSwitcher from '@/components/RadioComponentSwitcher'
import RadioComponentSwitcherMixin from '@/mixins/RadioComponentSwitcher'
import { mapGetters } from 'vuex'

const typesToComponent = {
  vinyl: 'MenuPrintsVinyl',
  print: 'MenuPrintsPrint'
}

export default {
  name: 'MenuPrints',
  components: {
    BaseMenu,
    MenuPrintsFirstLine,
    MenuPrintsSelected,
    MenuPrintsPrint,
    MenuPrintsVinyl,
    RadioComponentSwitcher
  },
  mixins: [RadioComponentSwitcherMixin],
  computed: {
    ...mapGetters({
      haveSelected: 'prints/haveSelected',
      curPrint: 'prints/curPrint',
      curType: 'prints/curPrintType',
      types: 'prints/curPrintTypes'
    }),
    typesWithComponent () {
      return this.types && this.types.map(type => ({ ...type, component: typesToComponent[type.code] }))
    },
    type: {
      get () { return this.curType },
      set (type) {
        this.$store.dispatch('prints/setType', { type })
      }
    }
  },
  methods: {
    selectPrint () {
      if (!this.curPrint) return

      this.$store.dispatch('prints/selectPrint', this.curPrint.id)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
