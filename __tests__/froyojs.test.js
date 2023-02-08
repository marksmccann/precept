/* eslint-disable */

import { render, fireEvent } from 'testing-library-froyojs';
import runTabsTests from './tests/runTabsTests';

import Tabs from '../packages/precept-froyojs/src/Tabs';

describe('froyojs', () => {
    runTabsTests({
        fireEvent,
        render(data) {
            const { tabs, panels, options } = data;

            // prettier-ignore
            return render(
                `
                    <div data-tabs>
                        <div data-tablist>
                            ${tabs.map((tab) => `
                                <button data-tab>${tab}</button>
                            `).join('')}
                        </div>
                        ${panels.map((panel) => `
                            <div data-panel>${panel}</div>
                        `).join('')}
                    </div>
                `,
                () => new Tabs('[data-tabs]', options)
            );
        },
    });
});
