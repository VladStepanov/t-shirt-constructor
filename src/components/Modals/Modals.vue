<template>
  <div>
    <ModalSelectModel />
    <ModalSelectPrint />
  </div>
</template>

<script>
import ModalSelectModel from '@/components/Modals/ModalSelectModel'
import ModalSelectPrint from '@/components/Modals/ModalSelectPrint'

export default {
  name: 'Modals',
  components: {
    ModalSelectModel,
    ModalSelectPrint
  }
}
</script>

<style>

</style>
