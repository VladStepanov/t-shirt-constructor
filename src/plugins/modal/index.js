import Modal from './Modal.vue'

const modals = new Map()

const modalPlugin = {
  install (Vue, options) {
    Vue.prototype.$modal = {
      show (modalName, params) {
        if (!modalName) return

        const modal = modals.get(modalName)
        modal.customData = params && params.customData
        modal.show()
      },
      hide (modalName) {
        if (!modalName) return

        const modal = modals.get(modalName)
        modal.hide()
      },
      registerModal (modalName, modalInstance) {
        if (modalName && modalInstance instanceof Vue) modals.set(modalName, modalInstance)
      }
    }
    Vue.component('Modal', Modal)
  }
}

export default modalPlugin
