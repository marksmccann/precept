/* eslint-disable */

import { render, fireEvent } from 'testing-library-froyojs';
import { tests } from '../packages/precept-tests/dist/es/tabs';
// import runTabsTests from './tests/runTabsTests';

import Tabs from '../packages/precept-froyojs/dist/es/Tabs';

describe.each(tests)('tabs', ({ name, options, content, assert }) => {
    const { tabs, panels } = content;

    test(name, () => {
        render(
            `
                <div data-tabs>
                    <div data-tablist>
                        ${tabs
                            .map(
                                (tab) => `
                            <button data-tab>${tab}</button>
                        `
                            )
                            .join('')}
                    </div>
                    ${panels
                        .map(
                            (panel) => `
                        <div data-panel>${panel}</div>
                    `
                        )
                        .join('')}
                </div>
            `,
            () => new Tabs('[data-tabs]', options)
        );

        assert();
    });
});

// describe('froyojs', () => {
//     it('should do something', () => {
//         assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
//     });
// runTabsTests({
//     fireEvent,
//     render(data) {
//         const { tabs, panels, options } = data;

//         // prettier-ignore
//         return render(
//             `
//                 <div data-tabs>
//                     <div data-tablist>
//                         ${tabs.map((tab) => `
//                             <button data-tab>${tab}</button>
//                         `).join('')}
//                     </div>
//                     ${panels.map((panel) => `
//                         <div data-panel>${panel}</div>
//                     `).join('')}
//                 </div>
//             `,
//             () => new Tabs('[data-tabs]', options)
//         );
//     },
// });
// });
