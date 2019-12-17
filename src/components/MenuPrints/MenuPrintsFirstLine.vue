<template>
  <div>
    <div>
      Название
      <span v-if="curPrint">{{ curPrint.title }}</span>
    </div>
    <button @click="showModal">Выбрать</button>
    <button @click="selectPrint">Добавить</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuPrintsFirstLine',
  computed: {
    ...mapGetters({
      curPrint: ['prints/curPrint']
    })
  },
  methods: {
    showModal () {
      this.$modal.show('select-print')
    },
    selectPrint () {
      if (!this.curPrint) return

      this.$store.dispatch('prints/selectPrint', this.curPrint.id)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
