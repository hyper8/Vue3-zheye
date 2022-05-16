<template>
  <div id="app" class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const testdata: ColumnProps[] = [
  {
    id: 1,
    title: 'testzhuanlan',
    avatar: 'https://cdn4.buysellads.net/uu/1/81016/1609783170-authentic-260x200-variation-1.jpg',
    description: 'zhuanlan de miaoshu'
  },
  {
    id: 2,
    title: 'testzhuanlan',
    avatar: 'https://cdn4.buysellads.net/uu/1/81016/1609783170-authentic-260x200-variation-1.jpg',
    description: 'zhuanlan de miaoshu'
  },
  {
    id: 3,
    title: 'testzhuanlan',
    avatar: 'https://cdn4.buysellads.net/uu/1/81016/1609783170-authentic-260x200-variation-1.jpg',
    description: 'zhuanlan de miaoshu'
  },
  {
    id: 4,
    title: 'testzhuanlan',
    avatar: '',
    description: 'zhuanlan de miaoshu'
  }

]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testdata
    }
  }
})
</script>

<style>

</style>
