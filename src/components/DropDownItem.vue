<template>
  <li class="dropdown-option"
      :class="{'is-disabled': disabled}"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      trpe: Boolean,
      default: false
    }
  }
})
</script>

<style>
.dropdown-option.is-disabled a{
  color: #6c757d;
  pointer-events: none;
  background: transparent;
}
</style>
