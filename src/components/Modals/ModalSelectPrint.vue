<template>
  <Modal name="select-print">
    <BaseModal>
      <BaseSelect v-model="category" :options="categories" />
    </BaseModal>
  </Modal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import BaseSelect from '@/components/BaseSelect'
import { mapState } from 'vuex'

export default {
  name: 'ModalSelectPrint',
  components: {
    BaseModal,
    BaseSelect
  },
  computed: {
    ...mapState({
      categories: state => state.prints.categories.categories,
      curCategory: state => state.prints.categories.curCategory
    }),
    category: {
      get () { return this.curCategory },
      set (category) {
        this.$store.dispatch('prints/setCategory', category)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
