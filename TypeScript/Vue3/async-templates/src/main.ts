import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router).mount('#app')

// const AsyncComp = defineAsyncComponent(
//     () =>
//       new Promise((resolve, reject) => {
//         resolve({
//           template: '<div>I am async!</div>'
//         })
//       })
//   )
  
//   App.component('async-example', AsyncComp)
