<template>
  <div class='model-item' :class='classes' v-bind='$attrs' v-on='listeners'>
    <svg class='model-item__preview' viewBox="0 0 301 166">
      <path
        v-for='(path, role, i) in paths'
        :key='i'
        :d='path'
      />
        <!-- :fill='activeColors[role]' -->
    </svg>
    <div class="model-item__title">{{ name }}</div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'ModalSelectModelItem',
  props: {
    paths: {
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
    // ...mapState(['activeColors']),
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
