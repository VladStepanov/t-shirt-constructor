<template>
  <Modal name='select-model'>
    <div class="select-model">
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
    </div>
  </Modal>
</template>

<script>
import ModalSelectModelItem from '@/components/ModalSelectModelItem'
import { mapGetters } from 'vuex'

export default {
  name: 'ModalSelectModel',
  components: {
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

<style lang='scss'>
.select-model {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-width: 700px;
  padding: 24px 36px;
  z-index: 1;
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }
}
</style>
