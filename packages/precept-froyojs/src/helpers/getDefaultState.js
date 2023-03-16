function getDefaultState(options) {
    const defaultState = {};

    Object.keys(options).forEach((name) => {
        defaultState[name] = options[name].default;
    });

    return defaultState;
}

export default getDefaultState;
