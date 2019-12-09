<template>
  <figure
    class="base-select"
    :class='classes'
    v-click-outside="handleOutsideClick"
  >
    <div class="base-select__active" @click='isOpened = !isOpened'>
      <figcaption class="base-select-active">
        <span v-if='!value' class='base-select__placeholder'>
          {{ placeholder }}
        </span>
        <slot
          name='active'
          v-else-if='$scopedSlots.active && value'
          :active='findTitleByCode(value)'
        ></slot>
        <span class='base-select-active__placeholder' v-else>{{ findTitleByCode(value) }}</span>
      </figcaption>
      <div class="base-select-active">
        <img
          class='base-select-active__image'
          :class='{ "base-select-active__image--open": isOpened }'
          src="@/assets/svg/down-chevron.svg"
        >
        <slot name='append'></slot>
      </div>
    </div>

    <div
      v-if='isOpened'
      class="base-select-options"
    >
      <div
        v-for='(option, i) in options'
        :key='i'
        class="base-select-options__item"
        @click.stop='selectOption(option)'
      >
        <slot
          name='option'
          v-if='$scopedSlots.option'
          :option='option'></slot>
        <div v-else>{{ option[placeholderField] }}</div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    value: {
      required: true
    },
    options: {
      // type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Default'
    },
    // Describes what field in option object is placeholder for option
    placeholderField: {
      type: String,
      default: 'title'
    },
    // Describes what field in option object is code value for option
    codeField: {
      type: String,
      default: 'code'
    }
  },
  computed: {
    classes () {
      return {
        'base-select--disabled': this.disabled
      }
    }
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    selectOption (option) {
      if (this.disabled) return

      this.$emit('input', option[this.codeField])
      this.isOpened = false
    },
    handleOutsideClick () {
      this.isOpened = false
    },
    findTitleByCode (code) {
      if (this.disabled) return

      const curOption = this.options.find(option => option[this.codeField] === code)
      return curOption && curOption[this.placeholderField]
    }
  }
}
</script>

<style lang='scss'>
.base-select {
  border: 1px solid #ccc;
  display: inline-block;
  margin: 0;
  position: relative;
  justify-self: flex-start;
  &--disabled {
    pointer-events: none;
    opacity: .5;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
  }
  &__active {
    cursor: pointer;
    position: relative;
    display: flex;
  }
  &__placeholder {
    padding: 5px 10px;
  }
  &-active {
    display: flex;
    &__placeholder {
      padding: 5px 10px;
    }
    &__image {
      padding: 0 10px;
      width: 12px;
      height: 100%;
      border-left: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      &--open {
        transform: rotateZ(180deg);
        border-left: none;
        border-right: 1px solid #ccc;
      }
    }
  }
  &-options {
    position: absolute;
    z-index: 1;
    top: calc(100% + 10px);
    left: 0;
    width: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    &__item {
      padding: 5px 10px;
      &:hover {
        background-color: darken(#fff, 30%);
      }
    }
  }
}

</style>
