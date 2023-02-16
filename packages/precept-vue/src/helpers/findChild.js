function findChild(children, Type) {
    if (children?.default) {
        return children.default().find((child) => {
            return child.type === Type;
        });
    }

    return null;
}

export default findChild;
