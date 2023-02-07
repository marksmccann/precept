import PropTypes from 'prop-types';
import getTabsSchema from 'precept/src/getTabsSchema';
import { nanoid } from 'nanoid';
import { Component, setAttributes, addEventListener } from 'froyojs';

function getSchema() {
    return getTabsSchema({
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
        return {
            activeTab: PropTypes.number,
            manual: PropTypes.bool,
        };
    }

    static get defaultState() {
        return {
            activeTab: 0,
            manual: false,
        };
    }

    setup() {
        const { rootElement } = this;

        this.id = nanoid(8);

        this.elements = {
            tablist: rootElement.querySelector('[data-tablist]'),
            tabs: Array.from(
                rootElement.querySelectorAll(':scope > * > [data-tab]')
            ),
            panels: Array.from(
                rootElement.querySelectorAll(':scope > [data-panel]')
            ),
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
            const { eventHandlers } = getSchema.call(this);

            eventHandlers.tabs[tabNumber].click(event);
        }
    }

    handleTabFocus(event) {
        const { tabs } = this.elements;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
            const tabNumber = tabs.indexOf(event.target);
            const { eventHandlers } = getSchema.call(this);

            eventHandlers.tabs[tabNumber].focus(event);
        }
    }

    handleTabKeyDown(event) {
        const { tabs } = this.elements;

        // istanbul ignore else
        if (tabs.includes(event.target)) {
            const tabNumber = tabs.indexOf(event.target);
            const { eventHandlers } = getSchema.call(this);

            eventHandlers.tabs[tabNumber].keydown(event);
        }
    }

    render(stateChanges) {
        const { tablist, tabs, panels } = this.elements;
        const { htmlAttributes } = getSchema.call(this);

        if (!this.initialized) {
            setAttributes(tablist, htmlAttributes.tablist);
        }

        // istanbul ignore else
        if ('activeTab' in stateChanges) {
            tabs.forEach((tab, index) => {
                setAttributes(tab, htmlAttributes.tabs[index]);
            });

            panels.forEach((panel, index) => {
                setAttributes(panel, htmlAttributes.panels[index]);
            });
        }
    }
}

export default Tabs;
