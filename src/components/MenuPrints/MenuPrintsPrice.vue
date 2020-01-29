<template>
  <div class="price">
    <span class="price__title">Цена: </span>
    <br>
    <span>{{ curPrintPrice }} руб</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuPrintsPrice',
  computed: {
    ...mapGetters({
      curPrintPrice: 'prints/curPrintPrice'
    })
  }
}
</script>

<style scoped lang="scss">
.price {
  font-size: 2em;
}
</style>
