<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Clock />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Clock from '@/components/Clock.vue'; // @ is an alias to /src

import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// @Options({
//   components: {
//     HelloWorld,
//     Clock
//   },
// })

// Async component without options
const asyncModal = defineAsyncComponent(() => import('@/components/Calendar.vue'))

// Async component with options
const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('@/components/Calendar.vue'),
  delay: 200,
  timeout: 3000,
})
@Options({
  components: {
    asyncModal
  }
})

export default class Home extends Vue {}
</script>
