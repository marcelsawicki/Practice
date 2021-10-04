import {createApp, defineAsyncComponent} from 'vue';
//import App from './App.vue';

//createApp(App).mount('#app');

const StaticComp = {
    template: `<div>Komponent statyczny</div>`
};

const DynamicComp:any = defineAsyncComponent(
    () => new Promise(
        resolve => {
            abc();
            setTimeout(
                () => resolve({ template: '<div>załadowany dynamicznie</div>' }),
                5000
            );
        }
    )
);
let abc = function fetchData() {
    // I prefer to use fetch
    // you can use use axios as an alternative
    return fetch('https://templatesapi-vue3.azurewebsites.net/api/templates/1', {
      method: 'get'
    })
      .then(res => {
          debugger;
        // a non-200 response code
        if (!res.ok) {
          // create error instance with HTTP status text
          const error = new Error(res.statusText);
          //error.json = res.json();
          throw error;
        }
  
        return res;
      })
      
  }
const app = createApp({
    components: {
        StaticComp,
        DynamicComp
    },
    template: `
        <div>
            <div>Test ładowania komponentów</div>
            <div><StaticComp /></div>
            <div>A poniżej komponent dynamiczny załaduje się za 5 sekund</div>
            <div><DynamicComp /></div>
        </div>
    `
});

app.mount("#app")