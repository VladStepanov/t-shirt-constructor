<template>
  <div id="app">
    <MainScreen />
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import MainScreen from '@/components/MainScreen'

export default {
  name: 'App',
  components: {
    Menu,
    MainScreen
  }
}
</script>

<style scoped lang="scss">

</style>
