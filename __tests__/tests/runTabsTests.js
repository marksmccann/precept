/* eslint-disable jest/no-export */

function runTabsTests({ render, fireEvent }) {
    describe('tabs', () => {
        it('should activate tab on click', () => {
            const { getAllByText } = render({
                tabs: ['Tab 1', 'Tab 2'],
                panels: ['Panel 1', 'Panel 2'],
            });

            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');

            fireEvent.click(tabs[1]);

            expect(tabs[0]).toHaveAttribute('data-active', 'false');
            expect(tabs[1]).toHaveAttribute('data-active', 'true');
            expect(panels[0]).toHaveAttribute('data-active', 'false');
            expect(panels[1]).toHaveAttribute('data-active', 'true');
        });

        it('should activate tab on focus', () => {
            const { getAllByText } = render({
                tabs: ['Tab 1', 'Tab 2'],
                panels: ['Panel 1', 'Panel 2'],
            });
            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');

            fireEvent.focus(tabs[1]);

            expect(tabs[0]).toHaveAttribute('data-active', 'false');
            expect(tabs[1]).toHaveAttribute('data-active', 'true');
            expect(panels[0]).toHaveAttribute('data-active', 'false');
            expect(panels[1]).toHaveAttribute('data-active', 'true');
        });

        it('should not activate tab on focus if manual', () => {
            const { getAllByText } = render({
                options: { manual: true },
                tabs: ['Tab 1', 'Tab 2'],
                panels: ['Panel 1', 'Panel 2'],
            });
            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');

            fireEvent.focus(tabs[1]);

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');
        });

        it('should activate next tab on arrow right', async () => {
            const { getAllByText } = render({
                tabs: ['Tab 1', 'Tab 2'],
                panels: ['Panel 1', 'Panel 2'],
            });
            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');

            fireEvent.keyDown(tabs[0], { key: 'ArrowRight' });

            expect(tabs[0]).toHaveAttribute('data-active', 'false');
            expect(tabs[1]).toHaveAttribute('data-active', 'true');
            expect(panels[0]).toHaveAttribute('data-active', 'false');
            expect(panels[1]).toHaveAttribute('data-active', 'true');

            fireEvent.keyDown(tabs[1], { key: 'ArrowRight' });

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');
        });

        it('should activate previous tab on arrow left', () => {
            const { getAllByText } = render({
                tabs: ['Tab 1', 'Tab 2'],
                panels: ['Panel 1', 'Panel 2'],
            });
            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');

            fireEvent.keyDown(tabs[0], { key: 'ArrowLeft' });

            expect(tabs[0]).toHaveAttribute('data-active', 'false');
            expect(tabs[1]).toHaveAttribute('data-active', 'true');
            expect(panels[0]).toHaveAttribute('data-active', 'false');
            expect(panels[1]).toHaveAttribute('data-active', 'true');

            fireEvent.keyDown(tabs[1], { key: 'ArrowLeft' });

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');
        });

        it('should ignore arrow keys if manual', () => {
            const { getAllByText } = render({
                options: { manual: true },
                tabs: ['Tab 1', 'Tab 2'],
                panels: ['Panel 1', 'Panel 2'],
            });
            const tabs = getAllByText(/Tab \d/);
            const panels = getAllByText(/Panel \d/);

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');

            fireEvent.keyDown(tabs[0], { key: 'ArrowRight' });

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');

            fireEvent.keyDown(tabs[0], { key: 'ArrowLeft' });

            expect(tabs[0]).toHaveAttribute('data-active', 'true');
            expect(tabs[1]).toHaveAttribute('data-active', 'false');
            expect(panels[0]).toHaveAttribute('data-active', 'true');
            expect(panels[1]).toHaveAttribute('data-active', 'false');
        });

        it('should log error if tabs and panels do not match', () => {
            global.consoleErrorSpy.mockImplementation(() => {});

            expect(() => {
                render({
                    tabs: ['Tab 1', 'Tab 2'],
                    panels: ['Panel 1'],
                });
            }).not.toThrow();
            expect(global.consoleErrorSpy).toHaveBeenCalledTimes(1);
        });

        it('should log error if active tab does not exist', () => {
            global.consoleErrorSpy.mockImplementation(() => {});

            expect(() => {
                render({
                    options: { activeTab: -1 },
                    tabs: ['Tab 1', 'Tab 2'],
                    panels: ['Panel 1', 'Panel 2'],
                });
            }).not.toThrow();
            expect(global.consoleErrorSpy).toHaveBeenCalledWith(
                expect.stringContaining('There is no tab for index')
            );
        });
    });
}

export default runTabsTests;
