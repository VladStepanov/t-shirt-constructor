<template>
  <figure class="select-print" :class="classes" v-bind="$attrs" v-on="listeners">
    <PrintPreview
      :paths="paths"
      class="select-print__item"
    />
    <figcaption class="select-print__title">{{ title }}</figcaption>
  </figure>
</template>

<script>
import PrintPreview from '@/components/PrintPreview'

export default {
  name: 'ModalSelectPrintItem',
  components: {
    PrintPreview
  },
  props: {
    paths: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    activeId: {
      type: String,
      required: true
    }
  },
  computed: {
    classes () {
      return {
        'select-print--active': this.activeId === this.id
      }
    },
    listeners () {
      return { ...this.$listeners, click: this.handleClick }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', this.id)
    }
  }
}
</script>

<style scoped lang="scss">
.select-print {
  cursor: pointer;
  height: 200px;
  margin: 0;
  display: flex;
  align-items: center;
  &__item {
  }
  &__title {
    text-align: center;
  }
  &--active {
    box-shadow: 0 0 10px rgba(0, 0, 0, .3)
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, .3)
  }
}
</style>
