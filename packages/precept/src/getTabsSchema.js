/* eslint-disable no-console */

function getTabsSchema(tabsData) {
    const {
        uniqueId,
        activeTab,
        manual,
        totalTabs,
        totalPanels,
        changeTab,
        focusOnTab,
    } = tabsData;

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
        htmlAttributes: {
            tablist: {
                role: 'tablist',
            },
            tabs: tabNumbers.map((tabNumber) => ({
                type: 'button',
                role: 'tab',
                id: `${uniqueId}-tab-${tabNumber}`,
                'aria-controls': `${uniqueId}-panel-${tabNumber}`,
                'aria-selected': activeTab === tabNumber,
                'data-active': activeTab === tabNumber,
            })),
            panels: panelNumbers.map((panelNumber) => ({
                role: 'tabpanel',
                id: `${uniqueId}-panel-${panelNumber}`,
                'aria-labelledby': `${uniqueId}-tab-${panelNumber}`,
                'data-active': activeTab === panelNumber,
            })),
        },
        eventHandlers: {
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
                    if (manual) {
                        return;
                    }

                    // istanbul ignore else
                    if (event.key === 'ArrowRight') {
                        focusOnTab(
                            tabNumber === totalTabs - 1 ? 0 : tabNumber + 1
                        );
                    } else if (event.key === 'ArrowLeft') {
                        focusOnTab(
                            tabNumber === 0 ? totalTabs - 1 : tabNumber - 1
                        );
                    }
                },
            })),
        },
    };
}

export default getTabsSchema;
