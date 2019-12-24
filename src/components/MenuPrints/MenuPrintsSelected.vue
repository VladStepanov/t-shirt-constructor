<template>
  <div class="selected-prints">
    <MenuPrintsSelectedItem
      v-for="print in selectedPrints"
      :key="print.id"
      :id="print.id"
      :title="print.title"
      :type="print.type"
      :side="print.side"
      :price="print.price"
      @delete="handleDelete"
    />
  </div>
</template>

<script>
import MenuPrintsSelectedItem from '@/components/MenuPrints/MenuPrintsSelectedItem'
import { mapGetters } from 'vuex'

export default {
  name: 'MenuPrintsSelected',
  components: {
    MenuPrintsSelectedItem
  },
  computed: {
    ...mapGetters({
      selectedPrints: 'prints/selectedPrints'
    })
  },
  methods: {
    resetSelected () {
      this.$store.dispatch('prints/selectedReset')
    },
    handleDelete (printId) {
      this.$store.dispatch('prints/deleteSelectionPrint', { printId })
    }
  }
}
</script>

<style scoped lang="scss">
.selected-prints {
  margin-top: 12px;
  border: 1px solid #ccc;
}
</style>
