import './app.css';
import React from 'react';
import { Tabs } from 'precept-react';

function App() {
    return (
        <>
            <header className="container">
                <h1>Precept React</h1>
            </header>
            <main>
                <section className="container">
                    <h2>Tabs</h2>
                    <Tabs>
                        <Tabs.Tablist>
                            <Tabs.Tab>Tab 1</Tabs.Tab>
                            <Tabs.Tab>Tab 2</Tabs.Tab>
                            <Tabs.Tab>Tab 3</Tabs.Tab>
                        </Tabs.Tablist>
                        <Tabs.Panel>Panel 1</Tabs.Panel>
                        <Tabs.Panel>Panel 2</Tabs.Panel>
                        <Tabs.Panel>Panel 3</Tabs.Panel>
                    </Tabs>
                </section>
            </main>
        </>
    );
}

export default App;
