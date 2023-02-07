import React from 'react';
import Tabs from 'precept-react/src/Tabs';
import './tabs.css';

function tabs(args) {
    const { activeTab, ...props } = args;
    return (
        <Tabs {...props} className="tabs" defaultActiveTab={activeTab}>
            <Tabs.Tablist className="tabs__tablist">
                <Tabs.Tab className="tabs__tab">1</Tabs.Tab>
                <Tabs.Tab className="tabs__tab">2</Tabs.Tab>
                <Tabs.Tab className="tabs__tab">3</Tabs.Tab>
            </Tabs.Tablist>
            <Tabs.Panel className="tabs__panel">1</Tabs.Panel>
            <Tabs.Panel className="tabs__panel">2</Tabs.Panel>
            <Tabs.Panel className="tabs__panel">3</Tabs.Panel>
        </Tabs>
    );
}

tabs.args = {
    activeTab: 0,
    manual: false,
};

tabs.argTypes = {
    activeTab: {
        control: 'number',
    },
    manual: {
        control: 'boolean',
    },
};

export default { title: 'Tabs' };
export { tabs };
