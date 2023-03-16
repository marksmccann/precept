// import { fireEvent, queries } from '@testing-library/dom';

export type AssertSetupEventDispatcher = (
    tab: HTMLElement,
    eventProperties?: Object
) => void;

export interface AssertSetupOptions<E> {
    scope?: HTMLElement;
    dispatchEvent: E;
}

export interface AssertSetupResult {
    queryAllByText: QueryByText;
    dispatchEvent: {
        click: AssertSetupEventDispatcher;
        focus: AssertSetupEventDispatcher;
        keydown: AssertSetupEventDispatcher;
    };
}

// const eventTypes = ['click', 'focus', 'keydown']

function setupAssert<T>(
    options: AssertSetupOptions<T> = {}
): AssertSetupResult {
    // let { scope, dispatchEvent } = options;
    // const scopeElement: HTMLElement = scope ? scope : document.body;
    // const scopedQueries = Object.entries(queries).map(([name, query]) => {
    //     // @ts-ignore
    //     return [name, (...args) => query(scopeElement, ...args)];
    // });
    // const modifiedEvents = Object.entries(fireEvent).map(([name, handler]) => {
    //     return [name.toLowerCase(), handler];
    // });
    // eventTypes.forEach((type) => {
    //     const handler: unknown = dispatchEvent[type];
    //     if (type in dispatchEvent && typeof dispatchEvent[type] === 'function') {
    //     }
    // })
    // const result: AssertSetupResult = {
    //     getAllByText: queries.getAllByText,
    //     dispatchEvent: {
    //         click: options.click || fireEvent.click,
    //     }
    // };
    // return result;
}

// setupAssert({
//     dispatchEvent: {
//         click: () => {},
//         focus: fireEvent.focus,
//     }
// })

export default setupAssert;
