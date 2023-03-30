import { Component, setAttributes, addEventListener } from 'froyojs';
import { tabs } from 'precept';
import { nanoid } from 'nanoid';

import getDefaultState from './helpers/getDefaultState';
import getStateTypes from './helpers/getStateTypes';

const { schema, options } = tabs;

type State = Pick<Parameters<typeof schema>[0], keyof typeof options>;

type Elements = {
    tablist: HTMLElement | null;
    tabs: HTMLElement[];
    panels: HTMLElement[];
};

type Listeners = {
    tabClick: ReturnType<typeof addEventListener>;
    tabFocus: ReturnType<typeof addEventListener>;
    tabKeyDown: ReturnType<typeof addEventListener>;
};

class Tabs extends Component<State, Elements, Listeners> {
    private id!: string;

    static get stateTypes() {
        return getStateTypes(options);
    }

    static get defaultState() {
        return getDefaultState(options);
    }

    private get schema() {
        return schema({
            ...this.state,
            uniqueId: this.id,
            totalTabs: this.elements.tabs.length,
            totalPanels: this.elements.panels.length,
            changeTab: (tabNumber: number) => {
                this.setState({ activeTab: tabNumber });
            },
            focusOnTab: (tabNumber: number) => {
                this.elements.tabs[tabNumber].focus();
            },
        });
    }

    protected setup(): void {
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

    private handleTabClick(event: MouseEvent) {
        const { tabs } = this.elements;
        const { target } = event;

        if (target instanceof HTMLElement && tabs.includes(target)) {
            const tabNumber = tabs.indexOf(target);
            const { handlers } = this.schema;

            handlers.tabs[tabNumber].click(event);
        }
    }

    private handleTabFocus(event: FocusEvent) {
        const { tabs } = this.elements;
        const { target } = event;

        if (target instanceof HTMLElement && tabs.includes(target)) {
            const tabNumber = tabs.indexOf(target);
            const { handlers } = this.schema;

            handlers.tabs[tabNumber].focus(event);
        }
    }

    private handleTabKeyDown(event: KeyboardEvent) {
        const { tabs } = this.elements;
        const { target } = event;

        if (target instanceof HTMLElement && tabs.includes(target)) {
            const tabNumber = tabs.indexOf(target);
            const { handlers } = this.schema;

            handlers.tabs[tabNumber].keydown(event);
        }
    }

    protected render(stateChanges: Partial<State>): void {
        const { tablist, tabs, panels } = this.elements;
        const { attributes } = this.schema;

        if (!this.initialized) {
            if (tablist) {
                setAttributes(tablist, attributes.tablist);
            }
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
