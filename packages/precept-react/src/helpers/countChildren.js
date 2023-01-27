import forEachChild from './forEachChild';
import isElementType from './isElementType';

function countChildren(children, Component) {
    let count = 0;

    forEachChild(children, (child) => {
        if (isElementType(child, Component)) {
            count += 1;
        }
    });

    return count;
}

export default countChildren;
