function countChildren(children, Type) {
    let count = 0;

    if (children?.default) {
        children.default().forEach((child) => {
            if (child.type === Type) {
                count += 1;
            }
        });
    }

    return count;
}

export default countChildren;
