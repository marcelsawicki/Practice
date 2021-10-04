import {createApp, defineAsyncComponent} from 'vue';
//import App from './App.vue';

//createApp(App).mount('#app');

const StaticComp = {
    template: `<div>Komponent statyczny</div>`
};

const DynamicComp:any = defineAsyncComponent(
    () => new Promise(
        async resolve => {
            const response = await fetch(`https://templatesapi-vue3.azurewebsites.net/api/templates/1`);
            const template = await response.text();
            resolve({template});
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
            <div>Test ładowania komponentów 1</div>
            <div><StaticComp /></div>
            <div>A poniżej komponent dynamiczny załaduje się za 5 sekund</div>
            <div><DynamicComp /></div>
        </div>
    `
});

app.mount("#app")