import PropTypes from 'prop-types';

function getStateTypes(options) {
    const stateTypes = {};

    Object.keys(options).forEach((name) => {
        switch (options[name].type) {
            case Boolean:
                stateTypes[name] = PropTypes.bool;
                break;
            case Number:
                stateTypes[name] = PropTypes.number;
                break;
            default:
        }
    });

    return stateTypes;
}

export default getStateTypes;
