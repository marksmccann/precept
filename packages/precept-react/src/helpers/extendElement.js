import { cloneElement } from 'react';

function extendElement(element, attributes) {
    // TODO: honor previous event callbacks and ref
    return cloneElement(element, { ...attributes });
}

export default extendElement;
