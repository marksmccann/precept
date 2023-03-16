import { schema, options } from 'precept/dist/es/tabs';
import { nanoid } from 'nanoid';
import { Component, setAttributes, addEventListener } from 'froyojs';

import getDefaultState from './helpers/getDefaultState';
import getStateTypes from './helpers/getStateTypes';

function getSchema() {
    return schema({
        ...this.state,
        uniqueId: this.id,
        totalTabs: this.elements.tabs.length,
        totalPanels: this.elements.panels.length,
        changeTab: (tabNumber) => {
            this.setState({ activeTab: tabNumber });
        },
        focusOnTab: (tabNumber) => {
            this.elements.tabs[tabNumber].focus();
        },
    });
}

class Tabs extends Component {
    static get stateTypes() {
        return getStateTypes(options);
    }

    static get defaultState() {
        return getDefaultState(options);
    }

    setup() {
        const { rootElement } = this;

        this.id = nanoid(8);

        this.elements = {
            tablist: rootElement.querySelector('[data-tablist]'),
            tabs: rootElement.querySelectorAll(':scope > * > [data-tab]'),
            panels: rootElement.querySelectorAll(':scope > [data-panel]'),
        };

        this.listeners = {
            tabClick: addEventListener(
                rootElement,
                'click',
                this.handleTabClick.bind(this)
            ),
            tabFocus: addEventListener(
                rootElement,
                'focus',
                this.handleTabFocus.bind(this),
                true
            ),
            tabKeyDown: addEventListener(
                rootElement,
                'keydown',
                this.handleTabKeyDown.bind(this)
            ),
        };
    }

    handleTabClick(event) {
        const { tabs } = this.elements;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
            const tabNumber = tabs.indexOf(event.target);
            const { handlers } = getSchema.call(this);

            handlers.tabs[tabNumber].click(event);
        }
    }

    handleTabFocus(event) {
        const { tabs } = this.elements;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
            const tabNumber = tabs.indexOf(event.target);
            const { handlers } = getSchema.call(this);

            handlers.tabs[tabNumber].focus(event);
        }
    }

    handleTabKeyDown(event) {
        const { tabs } = this.elements;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
            const tabNumber = tabs.indexOf(event.target);
            const { handlers } = getSchema.call(this);

            handlers.tabs[tabNumber].keydown(event);
        }
    }

    render(stateChanges) {
        const { tablist, tabs, panels } = this.elements;
        const { attributes } = getSchema.call(this);

        if (!this.initialized) {
            setAttributes(tablist, attributes.tablist);
        }

        // istanbul ignore else
        if ('activeTab' in stateChanges) {
            tabs.forEach((tab, index) => {
                setAttributes(tab, attributes.tabs[index]);
            });

            panels.forEach((panel, index) => {
                setAttributes(panel, attributes.panels[index]);
            });
        }
    }
}

export default Tabs;
