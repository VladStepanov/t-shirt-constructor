<template>
  <div class="price" v-if="curModelPrice">
    <span class="price__title">Цена:</span>
    <div class="price__value">{{ curModelPrice }} руб</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MenuShirtPrice',
  computed: {
    ...mapGetters(['curModelPrice'])
  }
}
</script>

<style scoped lang="scss">
.price {
  font-size: 2em;
  &__title {

  }
  &__value {

  }
}
</style>
