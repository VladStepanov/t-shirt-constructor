<template>
  <div id="app">
    <MainScreen />
    <BaseSelect v-model='head' :options='options'></BaseSelect>
    <BaseSelect v-model='body' :options='options'></BaseSelect>
    <BaseSelect v-model='sleeves' :options='options'></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'
import MainScreen from '@/components/MainScreen'

export default {
  name: 'App',
  components: {
    BaseSelect,
    MainScreen
  },
  computed: {
    head: {
      get () { return this.$store.state.head },
      set (val) {
        this.$store.commit('SET_HEAD', val)
      }
    },
    body: {
      get () { return this.$store.state.body },
      set (val) {
        this.$store.commit('SET_BODY', val)
      }
    },
    sleeves: {
      get () { return this.$store.state.sleeves },
      set (val) {
        this.$store.commit('SET_SLEEVES', val)
      }
    }
  },
  data () {
    return {
      option: '',
      options: [
        {
          title: 'red',
          value: 'firstcode'
        },
        {
          title: 'blue',
          value: 'secondcode'
        },
        {
          title: 'green',
          value: 'secondcode'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
