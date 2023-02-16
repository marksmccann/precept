import { ref, computed, h } from 'vue';
import { getTabsSchema } from 'precept';
import { nanoid } from 'nanoid';
import countChildren from './helpers/countChildren';
import findChild from './helpers/findChild';

const TabsPanel = {
    name: 'TabsPanel',
    setup(props, context) {
        return () => (
            <div>{context.slots.default ? context.slots.default() : ''}</div>
        );
    },
};

const TabsTablist = {
    name: 'TabsTablist',
    setup(props, context) {
        return () => (
            <div>{context.slots.default ? context.slots.default() : ''}</div>
        );
    },
};

const TabsTab = {
    name: 'TabsTab',
    setup(props, context) {
        return () => (
            <button>
                {context.slots.default ? context.slots.default() : ''}
            </button>
        );
    },
};

const Tabs = {
    name: 'Tabs',
    props: {
        manual: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, context) {
        const activeTab = ref(0);
        const tabs = ref([]);
        const { value: manual } = ref(props.manual);
        const { value: uniqueId } = computed(() => nanoid(8));
        const tablist = findChild(context.slots, TabsTablist);
        const getTabElementRef = (tabNumber) => {
            return (element) => {
                tabs.value[tabNumber] = element.$el;
            };
        };

        return () => {
            const { htmlAttributes, eventHandlers } = getTabsSchema({
                activeTab: activeTab.value,
                uniqueId,
                manual,
                totalTabs: countChildren(tablist?.children, TabsTab),
                totalPanels: countChildren(context.slots, TabsPanel),
                changeTab: (tabNumber) => {
                    activeTab.value = tabNumber;
                },
                focusOnTab: (tabNumber) => {
                    tabs.value[tabNumber].focus();
                },
            });

            let tabCount = -1;
            let panelCount = -1;

            return (
                <div>
                    {context.slots.default().map((child) => {
                        if (child.type === TabsTablist) {
                            const tablistChildren = child.children
                                .default()
                                .map((tablistChild) => {
                                    tabCount += 1;

                                    if (tablistChild.type === TabsTab) {
                                        return h(
                                            TabsTab,
                                            {
                                                ...tablistChild.props,
                                                ...htmlAttributes.tabs[
                                                    tabCount
                                                ],
                                                onClick:
                                                    eventHandlers.tabs[tabCount]
                                                        .click,
                                                onFocus:
                                                    eventHandlers.tabs[tabCount]
                                                        .focus,
                                                onKeydown:
                                                    eventHandlers.tabs[tabCount]
                                                        .keydown,
                                                ref: getTabElementRef(tabCount),
                                            },
                                            tablistChild.children
                                        );
                                    }

                                    return tablistChild;
                                });

                            return h(
                                TabsTablist,
                                {
                                    ...child.props,
                                    ...htmlAttributes.tablist,
                                },
                                () => tablistChildren
                            );
                        }

                        if (child.type === TabsPanel) {
                            panelCount += 1;

                            return h(
                                TabsPanel,
                                {
                                    ...child.props,
                                    ...htmlAttributes.panels[panelCount],
                                },
                                child.children
                            );
                        }

                        return child;
                    })}
                </div>
            );
        };
    },
};

export { Tabs, TabsPanel, TabsTablist, TabsTab };
