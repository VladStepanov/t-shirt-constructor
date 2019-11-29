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
      Body
      <BaseSelect v-model='body' :options='colorSchema'></BaseSelect>
    </div>
    <div>
      leftSleeve
      <BaseSelect v-model='leftSleeve' :options='colorSchema'></BaseSelect>
    </div>
    <div>
      rightSleeve
      <BaseSelect v-model='rightSleeve' :options='colorSchema'></BaseSelect>
    </div>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Menu',
  components: {
    BaseSelect
  },
  mounted () {
    console.log(this.$store.state)
  },
  computed: {
    ...mapGetters(['colorSchema']),
    ...mapState({
      genders: state => state.genders.genders,
      collections: state => state.collections.collections
    }),
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
    },
    body: {
      get () { return this.$store.state.activeColors.front },
      set (val) {
        this.$store.commit('SET_BODY', val)
      }
    },
    leftSleeve: {
      get () { return this.$store.state.activeColors.leftSleeve },
      set (val) {
        this.$store.commit('SET_L_SLEEVE', val)
      }
    },
    rightSleeve: {
      get () { return this.$store.state.activeColors.rightSleeve },
      set (val) {
        this.$store.commit('SET_R_SLEEVE', val)
      }
    }
  }
}
</script>

<style>

</style>
