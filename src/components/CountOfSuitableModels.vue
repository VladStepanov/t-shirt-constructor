<template>
  <div class="models-count">
    <span>Вариантов: {{ countOfModels }}</span>
  </div>
</template>

<script>
export default {
  name: 'CountOfSuitableModels',
  computed: {
    countOfModels () {
      const models = this.$store.getters['filters/suitableModels'] || []
      return models.length
    }
  }
}
</script>

<style scoped lang="scss">
.models-count {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
