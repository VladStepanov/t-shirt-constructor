<template>
  <div class="filters">
    <BaseSelect placeholder='Бренд' v-model='collection' :options='collections' />
    <BaseSelect placeholder='Для кого' v-model='gender' :options='genders' />
    <BaseSelect placeholder='Материал' v-model='material' :options='materialsList' />
    <button @click='showSuitableModels'>Show suitable models</button>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapState } from 'vuex'

export default {
  name: 'MenuFilters',
  components: {
    BaseSelect
  },
  computed: {
    ...mapState({
      genders: state => state.genders.genders,
      collections: state => state.collections.collections,
      materialsList: state => state.materials.materialsList
    }),
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
}
</style>
