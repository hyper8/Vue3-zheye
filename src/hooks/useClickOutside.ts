import { ref, onMounted, onUnmounted, Ref } from 'vue'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useclickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutSide.value = false
      } else {
        isClickOutSide.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler, false)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler, false)
  })
  return isClickOutSide
}

export default useclickOutSide
