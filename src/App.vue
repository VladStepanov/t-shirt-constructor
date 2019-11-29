<template>
  <div id="app" :class='{ "dev": !isProduction }'>
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
  },
  computed: {
    isProduction () {
      // console.log(process.env.NODE_ENV === 'production')
      return process.env.NODE_ENV === 'production'
    }
  }
}
</script>

<style scoped lang="scss">
.dev {
  max-width: 1180px;
  margin: 100px auto 0;
  display: flex;
  justify-content: space-around;
}
</style>
