import Tabs from '../src/Tabs';
import './tabs.css';

function tabs(args) {
    setTimeout(() => new Tabs(document.querySelector('[data-tabs]'), args));

    return `
        <div class="tabs" data-tabs>
            <div class="tabs__tablist" data-tablist>
                <button class="tabs__tab" data-tab>Tab 1</button>
                <button class="tabs__tab" data-tab>Tab 2</button>
                <button class="tabs__tab" data-tab>Tab 3</button>
            </div>
            <div class="tabs__panel" data-panel>Panel 1</div>
            <div class="tabs__panel" data-panel>Panel 2</div>
            <div class="tabs__panel" data-panel>Panel 3</div>
        </div>
    `;
}

tabs.args = {
    activeTab: 0,
    manual: false,
};

tabs.argTypes = {
    activeTab: {
        control: 'number',
    },
    manual: {
        control: 'boolean',
    },
};

export default { title: 'Tabs' };
export { tabs };
