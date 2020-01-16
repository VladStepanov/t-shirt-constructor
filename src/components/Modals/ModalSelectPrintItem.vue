<template>
  <figure class="select-print" :class="classes" v-bind="$attrs" v-on="listeners">
    <PrintPreview
      :paths="paths"
      :aspect-ratio="aspectRatio"
      :width="width"
      :texture="texture"
      :color="color"
      :init-size="initSize"
      :id="`modal-${id}`"
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
    aspectRatio: {
      type: Number,
      required: true
    },
    color: { type: String },
    texture: { type: String },
    width: {
      type: Number,
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
    },
    initSize: {
      type: Object,
      validator (size) {
        return size.x && size.y
      }
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
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
