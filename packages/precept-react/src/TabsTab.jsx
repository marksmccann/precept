/* eslint-disable react/button-has-type */

import React, { forwardRef } from 'react';

function Tab(props, ref) {
    return <button {...props} ref={ref} />;
}

const TabsTab = forwardRef(Tab);

export default TabsTab;
