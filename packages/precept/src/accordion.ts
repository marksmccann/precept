import type { SchemaResult, SchemaOptions, Options } from './types';

interface AccordionSchemaOptions extends SchemaOptions {
    uniqueId: string;
    expandedPanels: number[];
    totalHeaders: number;
    totalPanels: number;
    minOneExpanded: boolean;
    maxOneExpanded: boolean;
    expandPanels(sectionNumbers: number[]): void;
    focusOnHeader(sectionNumber: number): void;
}

interface AccordionSchemaResult extends SchemaResult {
    attributes: {
        headers: Array<{
            type: 'button';
            id: string;
            'aria-expanded': string;
            'aria-controls': string;
        }>;
        panels: Array<{
            role?: 'region';
            id: string;
            'aria-labelledby': string;
            hidden?: string;
        }>;
    };
    handlers: {
        headers: Array<{
            click(event: MouseEvent): void;
            keydown(event: KeyboardEvent): void;
        }>;
    };
}

export const options = {
    expandedPanels: {
        type: Array,
        default: [],
    },
    minOneExpanded: {
        type: Boolean,
        default: false,
    },
    maxOneExpanded: {
        type: Boolean,
        default: false,
    },
} satisfies Options;

export function schema(
    schemaOptions: AccordionSchemaOptions
): AccordionSchemaResult {
    const {
        uniqueId,
        expandPanels,
        minOneExpanded,
        maxOneExpanded,
        totalHeaders,
        totalPanels,
        expandedPanels,
        focusOnHeader,
    } = schemaOptions;

    // convert the header and panel lengths into
    // an array of numbers that can be iterated
    const headerNumbers = Array.from(Array(totalHeaders).keys());
    const panelNumbers = Array.from(Array(totalPanels).keys());

    if (totalHeaders !== totalPanels) {
        console.error(
            `Warning: Accordions must have an equal number of headers and panels. Found ${totalHeaders} headers and ${totalPanels} panels.`
        );
    }

    expandedPanels.forEach((panelNumber) => {
        if (panelNumber < 0 || panelNumber > totalPanels) {
            console.error(
                `Warning: There is no panel for index: "${panelNumber}"`
            );
        }
    });

    if (minOneExpanded && expandedPanels.length === 0) {
        console.error(
            'Warning: There must be at least one expanded panel with "minOneExpanded". Found 0 expanded panels.'
        );
    }

    if (maxOneExpanded && expandedPanels.length > 1) {
        console.error(
            `Warning: There cannot be more then one expanded panel with "maxOneExpanded". Found ${expandedPanels.length} expanded panels`
        );
    }

    return {
        attributes: {
            headers: headerNumbers.map((headerNumber) => ({
                type: 'button',
                id: `${uniqueId}-header-${headerNumber}`,
                'aria-controls': `${uniqueId}-panel-${headerNumber}`,
                'aria-expanded': expandedPanels.includes(headerNumber)
                    ? 'true'
                    : 'false',
            })),
            panels: panelNumbers.map((panelNumber) => ({
                id: `${uniqueId}-panel-${panelNumber}`,
                'aria-labelledby': `${uniqueId}-header-${panelNumber}`,
            })),
        },
        handlers: {
            headers: headerNumbers.map((headerNumber) => ({
                click() {
                    const expandedPanelSet = new Set(expandedPanels);

                    if (expandedPanelSet.has(headerNumber)) {
                        expandedPanelSet.delete(headerNumber);
                    } else {
                        expandedPanelSet.add(headerNumber);
                    }

                    if (maxOneExpanded && expandedPanelSet.size > 1) {
                        expandedPanelSet.clear();
                        expandedPanelSet.add(headerNumber);
                    }

                    if (minOneExpanded && expandedPanelSet.size === 0) {
                        expandedPanelSet.add(headerNumber);
                    }

                    expandPanels(Array.from(expandedPanelSet));
                },
                keydown(event: KeyboardEvent) {
                    const lastHeader = totalHeaders - 1;
                    const nextHeader = headerNumber + 1;
                    const previousHeader = headerNumber - 1;
                    let headerToFocus: number = -1;

                    if (event.key === 'ArrowUp') {
                        headerToFocus =
                            headerNumber === lastHeader ? 0 : nextHeader;
                    } else if (event.key === 'ArrowDown') {
                        headerToFocus =
                            headerNumber === 0 ? lastHeader : previousHeader;
                    } else if (event.key === 'Home') {
                        headerToFocus = 0;
                    } else if (event.key === 'End') {
                        headerToFocus = lastHeader;
                    }

                    if (headerToFocus > -1) {
                        event.preventDefault();
                        focusOnHeader(headerToFocus);
                    }
                },
            })),
        },
    };
}
