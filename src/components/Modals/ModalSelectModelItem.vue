<template>
  <div class='model-item' :class='classes' v-bind='$attrs' v-on='listeners'>
    <BaseShirt
      class="model-item__preview"
      :paths="paths.front"
      :view-box="viewBox"
      side="front"
    />
    <div class="model-item__title">{{ name }}</div>
  </div>
</template>

<script>
import BaseShirt from '@/components/BaseShirt'

export default {
  name: 'ModalSelectModelItem',
  components: {
    BaseShirt
  },
  props: {
    paths: {
      type: Object,
      required: true
    },
    viewBox: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    activeId: {
      type: String,
      required: false
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        click: this.handleClick
      }
    },
    classes () {
      return {
        'model-item--active': this.id === this.activeId
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', this.id)
    }
  }
}
</script>

<style lang='scss'>
.model-item {
  padding: 24px;
  cursor: pointer;
  &__title {
    text-align: center;
  }
  &__preview {
    width: 100%;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0, .3)
  }
  &--active {
    box-shadow: 0 0 10px rgba(0,0,0, .3)
  }
}
</style>
