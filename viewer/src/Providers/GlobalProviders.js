import React, { useState } from "react";

import PropTypes from "prop-types";

import sdgMetadataJSON from "../Data/library_manager_meta.json";
import sdgJSON from "../Data/library_manager_sdg.json";
import SdgContext from "./SdgContext";

GlobalProviders.propTypes = {
    children: PropTypes.object,
};

/**
 * Provides all contexts consumed by the application.
 * @param {JSX} children
 * @return {JSX}
 */
function GlobalProviders ({children}) {
    const [sdg, setSdg] = useState(sdgJSON);
    const [sdgMetadata, setSdgMetadata] = useState(sdgMetadataJSON);

    return (
        <SdgContext.Provider value={{sdg, sdgMetadata}}>
            {children}
        </SdgContext.Provider>
    );
};

export default GlobalProviders;
