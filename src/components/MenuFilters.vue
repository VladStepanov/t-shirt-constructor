<template>
  <div class="filters">
    <BaseSelect
      placeholder='Бренд'
      v-model='collection'
      :options='collections'
    />
    <BaseSelect
      placeholder='Для кого'
      v-model='gender'
      :options='genders'
    />
    <BaseSelect
      v-if='haveSelectedModel'
      placeholder='Материал'
      v-model='material'
      :options='materialsList'
    />
    <BaseSelect
      placeholder='Тип'
      v-model='type'
      :options='types'
    />
    <button @click='showSuitableModels'>Show suitable models</button>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'MenuFilters',
  components: {
    BaseSelect
  },
  computed: {
    ...mapState({
      collections: state => state.filters.collections,
      types: state => state.filters.types,
      genders: state => state.filters.genders,
      materialsList: state => state.materials.materialsList
    }),
    ...mapGetters({
      haveSelectedModel: 'haveSelectedModel'
    }),
    type: {
      get () { return this.$store.state.filters.curType },
      set (type) { this.$store.commit('filters/SET_TYPE', type) }
    },
    gender: {
      get () { return this.$store.state.filters.curGender },
      set (gender) {
        this.$store.commit('filters/SET_GENDER', gender)
      }
    },
    collection: {
      get () { return this.$store.state.filters.curCollection },
      set (collection) {
        this.$store.commit('filters/SET_COLLECTION', collection)
      }
    },
    material: {
      get () { return this.$store.state.materials.curMaterial },
      set (material) {
        this.$store.commit('SET_MATERIAL', material)
      }
    }
  },
  methods: {
    showSuitableModels () {
      this.$modal.show('select-model')
    }
  }
}
</script>

<style scoped lang='scss'>
.filters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
