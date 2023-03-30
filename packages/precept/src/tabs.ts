import type { SchemaResult, SchemaOptions, Options } from './types';

interface TabsSchemaOptions extends SchemaOptions {
    uniqueId: string;
    manual: boolean;
    activeTab: number;
    totalTabs: number;
    totalPanels: number;
    changeTab(tabNumber: number): void;
    focusOnTab(tabNumber: number): void;
}

interface TabsSchemaResult extends SchemaResult {
    attributes: {
        tablist: {
            role: 'tablist';
        };
        tabs: Array<{
            type: 'button';
            role: 'tab';
            id: string;
            'aria-controls': string;
            'aria-selected': string;
        }>;
        panels: Array<{
            role: 'tabpanel';
            id: string;
            'aria-labelledby': string;
            hidden: string | null;
        }>;
    };
    handlers: {
        tabs: Array<{
            click(event: MouseEvent): void;
            focus(event: FocusEvent): void;
            keydown(event: KeyboardEvent): void;
        }>;
    };
}

export const options = {
    manual: {
        type: Boolean,
        default: false,
    },
    activeTab: {
        type: Number,
        default: 0,
    },
} satisfies Options;

export function schema(schemaOptions: TabsSchemaOptions): TabsSchemaResult {
    const {
        uniqueId,
        activeTab,
        manual,
        totalTabs,
        totalPanels,
        changeTab,
        focusOnTab,
    } = schemaOptions;

    // convert the tab and panel lengths into
    // an array of numbers that can be iterated
    const tabNumbers = Array.from(Array(totalTabs).keys());
    const panelNumbers = Array.from(Array(totalPanels).keys());

    if (totalTabs !== totalPanels) {
        console.error(
            `Warning: Tabs must have an equal number of tabs and panels. Found ${totalTabs} tabs and ${totalPanels} panels.`
        );
    }

    if (activeTab < 0 || activeTab >= totalTabs) {
        console.error(`Warning: There is no tab for index: "${activeTab}"`);
    }

    return {
        attributes: {
            tablist: {
                role: 'tablist',
            },
            tabs: tabNumbers.map((tabNumber) => ({
                type: 'button',
                role: 'tab',
                id: `${uniqueId}-tab-${tabNumber}`,
                'aria-controls': `${uniqueId}-panel-${tabNumber}`,
                'aria-selected': activeTab === tabNumber ? 'true' : 'false',
            })),
            panels: panelNumbers.map((panelNumber) => ({
                role: 'tabpanel',
                id: `${uniqueId}-panel-${panelNumber}`,
                'aria-labelledby': `${uniqueId}-tab-${panelNumber}`,
                hidden: activeTab === panelNumber ? null : 'true',
            })),
        },
        handlers: {
            tabs: tabNumbers.map((tabNumber) => ({
                click() {
                    changeTab(tabNumber);
                },
                focus() {
                    if (!manual) {
                        changeTab(tabNumber);
                    }
                },
                keydown(event) {
                    const lastTab = totalTabs - 1;
                    const nextTab = tabNumber + 1;
                    const previousTab = tabNumber - 1;
                    let tabToFocus = -1;

                    if (event.key === 'ArrowRight') {
                        tabToFocus = tabNumber === lastTab ? 0 : nextTab;
                    } else if (event.key === 'ArrowLeft') {
                        tabToFocus = tabNumber === 0 ? lastTab : previousTab;
                    }

                    if (!manual && tabToFocus > -1) {
                        focusOnTab(tabToFocus);
                    }
                },
            })),
        },
    };
}
