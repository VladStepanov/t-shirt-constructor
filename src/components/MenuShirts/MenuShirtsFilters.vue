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
      placeholder='Тип'
      v-model='type'
      :options='types'
    />
    <button class='filters__reset' @click='resetFilters'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='red' d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
    </button>
    <button @click='showSuitableModels'>Show suitable models</button>
    <BaseSelect
      v-if='haveCurModel'
      placeholder='Материал'
      v-model='material'
      :options='materialsListForCurModel'
    />
    <BaseSelect
      placeholder='Размер'
      v-model='size'
      :options='sizes'
    />
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
      materialsList: state => state.materials.materialsList,
      sizes: state => state.sizes.sizes
    }),
    ...mapGetters({
      haveCurModel: 'haveCurModel',
      materialsListForCurModel: 'materialsListForCurModel'
    }),
    size: {
      get () { return this.$store.state.sizes.curSize },
      set (size) {
        this.$store.commit('SET_SIZE', size)
      }
    },
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
        this.$store.dispatch('setMaterial', material)
      }
    }
  },
  methods: {
    showSuitableModels () {
      this.$modal.show('select-model')
    },
    resetFilters () {
      this.$store.dispatch('filters/resetFilters')
    }
  }
}
</script>

<style lang='scss'>
.filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: flex-start;
  align-items: center;
  gap: 12px;
  &__reset {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
