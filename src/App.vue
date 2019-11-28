<template>
  <div id="app">
    <BaseSelect v-model='option' :options='options'></BaseSelect>
    {{ JSON.stringify(option) }}
  </div>
</template>

<script>
import BaseSelect from '@/components/BaseSelect'

export default {
  name: 'App',
  components: {
    BaseSelect
  },
  data () {
    return {
      option: '',
      options: [
        {
          title: 'First',
          value: 'firstcode'
        },
        {
          title: 'Second',
          value: 'secondcode'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
