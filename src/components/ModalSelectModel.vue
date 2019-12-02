<template>
  <Modal name='select-model'>
    <div class="modal">
      Choose 1 model
      <BaseSelect
        v-if='haveModels'
        v-model='model'
        :options='suitableModels'
        placeholderField='name'
        codeField='id'
      />
    </div>
  </Modal>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters } from 'vuex'

export default {
  name: 'ModalSelectModel',
  components: {
    BaseSelect
  },
  computed: {
    ...mapGetters(['suitableModels']),
    model: {
      get () { return this.$store.state.models.curModel },
      set (model) {
        this.$store.commit('SET_MODEL', model)
      }
    },
    haveModels () {
      return !!this.suitableModels.length
    }
  }
}
</script>

<style scoped lang='scss'>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-width: 700px;
  padding: 24px 36px;
  z-index: 1;
}
</style>
