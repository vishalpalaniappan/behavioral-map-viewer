import React from "react";

import PropTypes from "prop-types";

GlobalProviders.propTypes = {
    children: PropTypes.object,
};

/**
 * Provides all contexts consumed by the application.
 * @param {JSX} children
 * @return {JSX}
 */
function GlobalProviders ({children}) {
    return (
        <div>
            {children}
        </div>
    );
};

export default GlobalProviders;
