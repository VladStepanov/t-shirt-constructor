<template>
  <Modal name="select-print">
    <BaseModal>
      <BaseSelect v-model="category" :options="categories" />
      <div class="print-preview">
        <ModalSelectPrintItem
          v-for="print in prints"
          :key="print.id"
          :paths="print.paths"
          :title="print.title"
          :id="print.id"
          :active-id="curPrint"
          @click="selectPrint"
        />
      </div>
    </BaseModal>
  </Modal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import BaseSelect from '@/components/BaseSelect'
import ModalSelectPrintItem from '@/components/Modals/ModalSelectPrintItem'
import { mapState } from 'vuex'

export default {
  name: 'ModalSelectPrint',
  components: {
    BaseModal,
    BaseSelect,
    ModalSelectPrintItem
  },
  computed: {
    ...mapState({
      categories: state => state.prints.categories.categories,
      curCategory: state => state.prints.categories.curCategory,
      prints: state => state.prints.prints,
      curPrint: state => state.prints.curPrint
    }),
    category: {
      get () { return this.curCategory },
      set (category) {
        this.$store.dispatch('prints/setCategory', category)
      }
    }
  },
  methods: {
    selectPrint (print) {
      this.$store.dispatch('prints/setPrint', print)
    }
  }
}
</script>

<style scoped lang="scss">
.print-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 12px;
  gap: 12px;
}
</style>
