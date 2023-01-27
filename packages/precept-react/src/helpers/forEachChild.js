import { Children, isValidElement } from 'react';

function forEachChild(children, callback) {
    Children.forEach(children, (child) => {
        if (!isValidElement(child)) {
            return;
        }

        if (child.props.children) {
            forEachChild(child.props.children, callback);
        }

        callback(child);
    });
}

export default forEachChild;
