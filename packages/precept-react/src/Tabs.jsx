import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { uncontrollable } from 'uncontrollable';
import { nanoid } from 'nanoid';
import getTabsSchema from 'precept/src/getTabsSchema';

import extendElement from './helpers/extendElement';
import isElementType from './helpers/isElementType';
import mapChildren from './helpers/mapChildren';
import countChildren from './helpers/countChildren';

const propTypes = {
    children: PropTypes.node,
    manual: PropTypes.bool,
    activeTab: PropTypes.number,
    onChange: PropTypes.func,
};

const defaultProps = {
    children: null,
    manual: false,
    activeTab: 0,
    onChange: null,
};

const TabsPanel = forwardRef(function TabsPanel(props, ref) {
    return <div {...props} ref={ref} />;
});

const TabsTab = forwardRef(function TabsTab(props, ref) {
    return <button {...props} ref={ref} />;
});

const TabsTablist = forwardRef(function TabsTablist(props, ref) {
    return <div {...props} ref={ref} />;
});

const Tabs = forwardRef(function Tabs(props, ref) {
    const { children, manual, activeTab, onChange, ...restOfProps } = props;
    const { current: uniqueId } = useRef(nanoid(8));
    const tabElements = useRef([]);
    let tabCount = -1;
    let panelCount = -1;

    const { htmlAttributes, eventHandlers } = getTabsSchema({
        uniqueId,
        manual,
        activeTab,
        changeTab: onChange,
        totalTabs: countChildren(children, TabsTab),
        totalPanels: countChildren(children, TabsPanel),
        focusOnTab: (tabNumber) => {
            tabElements.current[tabNumber].focus();
        },
    });

    const getTabElementRef = (tabNumber) => {
        return (element) => {
            tabElements.current[tabNumber] = element;
        };
    };

    return (
        <div {...restOfProps} ref={ref}>
            {mapChildren(children, (child) => {
                if (isElementType(child, TabsTablist)) {
                    return extendElement(child, htmlAttributes.tablist);
                }

                if (isElementType(child, TabsTab)) {
                    tabCount += 1;

                    return extendElement(child, {
                        ...htmlAttributes.tabs[tabCount],
                        onClick: eventHandlers.tabs[tabCount].click,
                        onFocus: eventHandlers.tabs[tabCount].focus,
                        onKeyDown: eventHandlers.tabs[tabCount].keydown,
                        ref: getTabElementRef(tabCount),
                    });
                }

                // istanbul ignore else
                if (isElementType(child, TabsPanel)) {
                    panelCount += 1;

                    return extendElement(
                        child,
                        htmlAttributes.panels[panelCount]
                    );
                }

                // istanbul ignore next
                return child;
            })}
        </div>
    );
});

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

const UncontrollableTabs = uncontrollable(Tabs, { activeTab: 'onChange' });

UncontrollableTabs.Tablist = TabsTablist;
UncontrollableTabs.Tab = TabsTab;
UncontrollableTabs.Panel = TabsPanel;

export default UncontrollableTabs;
