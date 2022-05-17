<template>
  <div id="app" class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
    <form action="">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input
          type="text" class="form-control" id="exampleInputEmail1"
          v-model="emailRef.val"
          @blur="validateEmail"
        >
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/css/base.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'jh'
}

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
    ColumnList,
    GlobalHeader
  },
  setup () {
    const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      }
    }
    return {
      list: testdata,
      emailRef,
      validateEmail,
      currentUser
    }
  }
})
</script>

<style>

</style>
