<template>
  <div>
    <div>
      Название
      <span>{{ curPrint.title }}</span>
    </div>
    <button @click="showModal">Выбрать</button>
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
