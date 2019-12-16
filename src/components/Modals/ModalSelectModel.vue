<template>
  <Modal name='select-model'>
    <BaseModal>
      <div class="select-model__list">
        <ModalSelectModelItem
          v-for='(model, i) in suitableModels'
          :key='i'
          :paths='model.paths'
          :name='model.name'
          :id='model.id'
          :activeId='curModel && curModel.id'
          @click='selectModel'
        />
      </div>
    </BaseModal>
  </Modal>
</template>

<script>
import BaseModal from '@/components/BaseModal'
import ModalSelectModelItem from '@/components/Modals/ModalSelectModelItem'
import { mapGetters } from 'vuex'

export default {
  name: 'ModalSelectModel',
  components: {
    BaseModal,
    ModalSelectModelItem
  },
  computed: {
    ...mapGetters({
      suitableModels: 'filters/suitableModels',
      curModel: 'curModel'
    }),
    model: {
      get () { return this.$store.state.models.curModel },
      set (model) {
        this.selectModel(model)
      }
    }
  },
  methods: {
    selectModel (model) {
      this.$store.dispatch('setModel', model)
    }
  }
}
</script>

<style scoped lang='scss'>
.select-model {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }
}
</style>
