import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';

function Tablist(props, ref) {
    return <div {...props} ref={ref} />;
}

const TabsTablist = forwardRef(Tablist);

export default TabsTablist;
