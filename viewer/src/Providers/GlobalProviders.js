import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import sdgMetadataJSON from "../Data/library_manager_meta.json";
import sdgJSON from "../Data/library_manager_sdg.json";
import SdgContext from "./SdgContext";
import SelectedModuleContext from "./SelectedModuleContext";

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
    const [selectedModule, setSelectedModule] = useState();

    useEffect(() => {
        if (selectedModule) {
            console.log("Selected Module:", selectedModule);
        }
    }, [selectedModule]);

    return (
        <SelectedModuleContext.Provider value={{selectedModule, setSelectedModule}}>
            <SdgContext.Provider value={{sdg, sdgMetadata}}>
                {children}
            </SdgContext.Provider>
        </SelectedModuleContext.Provider>
    );
};

export default GlobalProviders;
