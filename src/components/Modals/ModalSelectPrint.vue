<template>
  <Modal name="select-print">
    <BaseModal>
      <BaseSelect v-model="category" :options="categories" />
      <div class="print-preview">
        <ModalSelectPrintItem
          v-for="print in suitablePrints"
          :key="print.id"
          :paths="print.paths"
          :title="print.title"
          :id="print.id"
          color=""
          texture="reflect"
          :aspectRatio="print.aspectRatio"
          :width="(print.types[print.type] && print.types[print.type].size) || previewPrintSize"
          :init-size="print.exportSize"
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
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ModalSelectPrint',
  components: {
    BaseModal,
    BaseSelect,
    ModalSelectPrintItem
  },
  computed: {
    ...mapState({
      categories: state => state.prints.filters.categories,
      curCategory: state => state.prints.filters.curCategory,
      curPrint: state => state.prints.curPrint,
      previewPrintSize: state => state.prints.sizes.previewSize
    }),
    ...mapGetters({
      suitablePrints: 'prints/filters/suitablePrints'
    }),
    category: {
      get () { return this.curCategory },
      set (category) {
        this.$store.dispatch('prints/filters/setCategory', category)
      }
    }
  },
  methods: {
    selectPrint (print) {
      this.$store.dispatch('prints/setPrint', print)
      this.$modal.hide('select-print')
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
