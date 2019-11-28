<template>
  <svg>
    <rect :fill='head' x='0' width='50' height='50'></rect>
    <rect :fill='body' x='50' width='50' height='50'></rect>
    <rect :fill='sleeves' x='100' width='50' height='50'></rect>
  </svg>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainScreen',
  computed: {
    ...mapState(['body', 'head', 'sleeves'])
  }
}
</script>

<style>

</style>
