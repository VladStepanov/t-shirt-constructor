<template>
  <div class="selected-prints">
    <MenuPrintsSelectedItem
      v-for="(print, i) in selectedPrints"
      :key="`${print.id}-${i}`"
      :id="print.id"
      :title="print.title"
      :type="print.type"
      :side="print.side"
      :price="print.price"
      @delete="(id) => handleDelete(id, i)"
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
      selectedPrints: 'prints/selection/selectedPrints'
    })
  },
  methods: {
    resetSelected () {
      this.$store.dispatch('prints/selection/reset')
    },
    handleDelete (printId, index) {
      this.$store.dispatch('prints/selection/deletePrint', { index })
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
