import { createApp, defineAsyncComponent } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//const app = createApp(App).use(store).use(router).mount('#app')

const StaticComp = {
    template: `<div>Komponent statyczny</div>`
};

const DynamicComp:any = defineAsyncComponent(
    () => new Promise(
        resolve => {
            setTimeout(
                () => resolve({ template: '<div>załadowany dynamicznie</div>' }),
                5000
            );
        }
    )
);

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
