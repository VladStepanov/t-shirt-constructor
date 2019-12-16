<template>
  <div v-if='isProduction' class='t-shirt-constructor'>
    <MainScreen />
    <Menu />
    <Modals />
  </div>
  <div v-else class="t-shirt-constructor--dev t-shirt-constructor">
    <MainScreen />
    <Menu />
    <Modals />
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import MainScreen from '@/components/MainScreen'
import Modals from '@/components/Modals'

export default {
  name: 'App',
  components: {
    Menu,
    MainScreen,
    Modals
  },
  computed: {
    isProduction () {
      return process.env.NODE_ENV === 'production'
    }
  }
}
</script>

<style scoped lang="scss">
.t-shirt-constructor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
}
.t-shirt-constructor--dev {
  max-width: 1180px;
  margin: 100px auto 0;
}
</style>
