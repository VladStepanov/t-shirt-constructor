<template>
  <div>
    <BaseSelect
      v-model="size"
      :options="sizes"
    />
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapState } from 'vuex'

export default {
  name: 'MenuPrintsPrint',
  components: {
    BaseSelect
  },
  computed: {
    ...mapState({
      sizes: state => state.prints.sizes
    }),
    size: {
      get () { return this.$store.getters['prints/curPrintSize'] },
      set (size) {
        this.$store.dispatch('prints/setSize', { size })
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
