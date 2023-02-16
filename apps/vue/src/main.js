import { createApp } from 'vue';
import { Tabs, TabsPanel, TabsTablist, TabsTab } from 'precept-vue';
import App from './App.vue';

import './app.css';

const app = createApp(App);

app.component('Tabs', Tabs);
app.component('TabsPanel', TabsPanel);
app.component('TabsTablist', TabsTablist);
app.component('TabsTab', TabsTab);

// precept.install(app);
app.mount('#app');
