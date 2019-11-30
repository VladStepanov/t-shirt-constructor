<template>
  <div>
    <div>
      Бренд
      <BaseSelect v-model='collection' :options='collections' />
    </div>
    <div>
      Для кого
      <BaseSelect v-model='gender' :options='genders' />
    </div>
    <div>
      Материал
      <BaseSelect v-model='material' :options='materialsList' />
    </div>
    <div>
      Доступные модели
      <BaseSelect v-if='haveModels' v-model='models' :options='suitableModels' placeholderField='name' placeholderCode='id' />
      {{ models }}
    </div>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Filters',
  components: {
    BaseSelect
  },
  computed: {
    ...mapGetters(['suitableModels']),
    ...mapState({
      genders: state => state.genders.genders,
      collections: state => state.collections.collections,
      materialsList: state => state.materials.materialsList
    }),
    haveModels () {
      return !!this.suitableModels.length
    },
    models: {
      get () { return this.$store.state.models.curModel },
      set (model) {
        this.$store.commit('SET_MODEL', model)
      }
    },
    material: {
      get () { return this.$store.state.materials.curMaterial },
      set (material) {
        this.$store.commit('SET_MATERIAL', material)
      }
    },
    collection: {
      get () { return this.$store.state.collections.curCollection },
      set (collection) {
        this.$store.commit('SET_COLLECTION', collection)
      }
    },
    gender: {
      get () { return this.$store.state.genders.curGender },
      set (gender) {
        this.$store.commit('SET_GENDER', gender)
      }
    }
  }
}
</script>

<style scoped lang='scss'>

</style>
