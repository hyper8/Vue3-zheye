<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    const submitForm = () => {
      context.emit('form-submit', true)
    }
    const cb = (test: unknown) => {
      console.log(test)
    }
    emitter.on('form-item-created', cb)
    onUnmounted(() => {
      emitter.off('form-item-created', cb)
    })
    return {
      submitForm
    }
  }
})
</script>

<style>

</style>
