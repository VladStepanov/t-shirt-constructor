<template>
  <div>
    <svg>
      <path
        v-for="(path, i) in paths"
        :key="i"
        :d="path"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PrintPreview',
  props: {
    paths: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
