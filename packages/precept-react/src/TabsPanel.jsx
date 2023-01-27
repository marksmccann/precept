import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';

function Panel(props, ref) {
    return <div {...props} ref={ref} />;
}

const TabsPanel = forwardRef(Panel);

export default TabsPanel;
