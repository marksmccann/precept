import assert from 'node:assert/strict';

import assertTest from './helpers/assertTest';
import type { AssertOptions } from './helpers/assertTest';

export interface TabsTest {
    name: string;
    options?: {
        manual: boolean;
    };
    content: {
        tabs: string[];
        panels: string[];
    };
    assert(options: AssertOptions): void;
}

export const tests: TabsTest[] = [
    {
        name: 'should activate tab on click',
        content: {
            tabs: ['Tab 1', 'Tab 2'],
            panels: ['Panel 1', 'Panel 2'],
        },
        assert: (options: AssertOptions) => {
            const { getAllByText, dispatchEvent } = assertTest(options);

            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');

            dispatchEvent.click(tabs[1]);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'false');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'true');
            assert.strictEqual(panels[0].getAttribute('hidden'), 'true');
            assert.strictEqual(panels[1].hasAttribute('hidden'), false);
        },
    },
    {
        name: 'should activate tab on focus',
        content: {
            tabs: ['Tab 1', 'Tab 2'],
            panels: ['Panel 1', 'Panel 2'],
        },
        assert: (options: AssertOptions) => {
            const { getAllByText, dispatchEvent } = assertTest(options);

            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');

            dispatchEvent.focus(tabs[1]);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'false');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'true');
            assert.strictEqual(panels[0].getAttribute('hidden'), 'true');
            assert.strictEqual(panels[1].hasAttribute('hidden'), false);
        },
    },
    {
        name: 'should not activate tab on focus if manual',
        options: { manual: true },
        content: {
            tabs: ['Tab 1', 'Tab 2'],
            panels: ['Panel 1', 'Panel 2'],
        },
        assert: (options: AssertOptions) => {
            const { getAllByText, dispatchEvent } = assertTest(options);

            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');

            dispatchEvent.focus(tabs[1]);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');
        },
    },
    {
        name: 'should activate next tab on arrow right',
        content: {
            tabs: ['Tab 1', 'Tab 2'],
            panels: ['Panel 1', 'Panel 2'],
        },
        assert: (options: AssertOptions) => {
            const { getAllByText, dispatchEvent } = assertTest(options);

            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');

            dispatchEvent.keydown(tabs[0], { key: 'ArrowRight' });

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'false');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'true');
            assert.strictEqual(panels[0].getAttribute('hidden'), 'true');
            assert.strictEqual(panels[1].hasAttribute('hidden'), false);

            dispatchEvent.keydown(tabs[1], { key: 'ArrowRight' });

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');
        },
    },
    {
        name: 'should activate next tab on arrow right',
        content: {
            tabs: ['Tab 1', 'Tab 2'],
            panels: ['Panel 1', 'Panel 2'],
        },
        assert: (options: AssertOptions) => {
            const { getAllByText, dispatchEvent } = assertTest(options);

            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');

            dispatchEvent.keydown(tabs[0], { key: 'ArrowLeft' });

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'false');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'true');
            assert.strictEqual(panels[0].getAttribute('hidden'), 'true');
            assert.strictEqual(panels[1].hasAttribute('hidden'), false);

            dispatchEvent.keydown(tabs[1], { key: 'ArrowLeft' });

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');
        },
    },
    {
        name: 'should ignore arrow keys if manual',
        options: { manual: true },
        content: {
            tabs: ['Tab 1', 'Tab 2'],
            panels: ['Panel 1', 'Panel 2'],
        },
        assert: (options: AssertOptions) => {
            const { getAllByText, dispatchEvent } = assertTest(options);

            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');

            dispatchEvent.keydown(tabs[0], { key: 'ArrowRight' });

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');

            dispatchEvent.keydown(tabs[0], { key: 'ArrowLeft' });

            assert.strictEqual(tabs[0].getAttribute('aria-selected'), 'true');
            assert.strictEqual(tabs[1].getAttribute('aria-selected'), 'false');
            assert.strictEqual(panels[0].hasAttribute('hidden'), false);
            assert.strictEqual(panels[1].getAttribute('hidden'), 'true');
        },
    },
];
