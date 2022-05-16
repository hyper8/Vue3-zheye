<template>
  <ul class="row">
    <li class="col-4 mb-3" v-for="column in list" :key="column.id">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img class="rounded-circle border border-light w-25 y-3" :src="column.avatar" :alt="column.title">
          <h3 class="card-title">{{column.title}}</h3>
          <p class="card-text text-left">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface ColumnProps{
    id: number;
    title: string;
    avatar: string;
    description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
