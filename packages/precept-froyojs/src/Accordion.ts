import { Component, setAttributes, addEventListener } from 'froyojs';
import { schema, options } from '../../precept/src/accordion';
import { nanoid } from 'nanoid';

import getDefaultState from './helpers/getDefaultState';
import getStateTypes from './helpers/getStateTypes';

type State = Pick<Parameters<typeof schema>[0], keyof typeof options>;

type Elements = {
    headers: HTMLElement[];
    panels: HTMLElement[];
};

type Listeners = {
    headerClick: ReturnType<typeof addEventListener>;
    headerKeyDown: ReturnType<typeof addEventListener>;
};

class Accordion extends Component<State, Elements, Listeners> {
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
            totalHeaders: this.elements.headers.length,
            totalPanels: this.elements.panels.length,
            expandPanels: (sectionNumbers) => {
                this.setState({ expandedPanels: sectionNumbers });
            },
            focusOnHeader: (sectionNumber) => {
                this.elements.headers[sectionNumber].focus();
            },
        });
    }

    protected setup(): void {
        const { rootElement } = this;

        this.id = nanoid(8);

        this.elements = {
            headers: Array.from(
                document.querySelectorAll(':scope > * > [data-header]')
            ),
            panels: Array.from(
                document.querySelectorAll(':scope > * > [data-panel]')
            ),
        };

        this.listeners = {
            headerClick: addEventListener(
                rootElement,
                'click',
                this.handleHeaderClick.bind(this)
            ),
            headerKeyDown: addEventListener(
                rootElement,
                'keydown',
                this.handleHeaderKeyDown.bind(this),
                true
            ),
        };
    }

    private handleHeaderClick(event: MouseEvent) {
        const { headers } = this.elements;
        const { target } = event;

        // istanbul ignore else
        if (target instanceof HTMLElement && headers.includes(target)) {
            const tabNumber = headers.indexOf(target);
            const { handlers } = this.schema;

            handlers.headers[tabNumber].click(event);
        }
    }

    private handleHeaderKeyDown(event: KeyboardEvent) {
        const { headers } = this.elements;
        const { target } = event;

        // istanbul ignore else
        if (target instanceof HTMLElement && headers.includes(target)) {
            const tabNumber = headers.indexOf(target);
            const { handlers } = this.schema;

            handlers.headers[tabNumber].keydown(event);
        }
    }

    protected render(stateChanges: Partial<State>): void {
        const { headers, panels } = this.elements;
        const { attributes } = this.schema;

        // istanbul ignore else
        if ('expandedPanels' in stateChanges) {
            headers.forEach((tab, index) => {
                setAttributes(tab, attributes.headers[index]);
            });

            panels.forEach((panel, index) => {
                setAttributes(panel, attributes.panels[index]);
            });
        }
    }
}

export default Accordion;
