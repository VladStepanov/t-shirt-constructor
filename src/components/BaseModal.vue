<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseModal'
}
</script>

<style scoped lang="scss">
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-width: 700px;
  padding: 24px 36px;
  z-index: 1;
}
</style>
