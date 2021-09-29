import {createApp, defineAsyncComponent} from 'vue';
//import App from './App.vue';

//createApp(App).mount('#app');

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