function isElementType(element, type) {
    if (element?.type?.render === type?.render) {
        return true;
    }

    return false;
}

export default isElementType;
