import { Children, isValidElement, cloneElement } from 'react';

function mapChildren(children, callback) {
    return Children.map(children, (child) => {
        let element = child;

        if (!isValidElement(child)) {
            return child;
        }

        if (element.props.children) {
            element = cloneElement(element, {
                children: mapChildren(element.props.children, callback),
            });
        }

        return callback(element);
    });
}

export default mapChildren;
