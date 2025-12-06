import React, {useContext} from "react";

import PropTypes from "prop-types";

import SelectedModuleContext from "../../../Providers/SelectedModuleContext";

import "./SdgModule.scss";

SdgModule.propTypes = {
    module: PropTypes.object,
};

/**
 * Container holding the SDG Modules.
 * @return {JSX.Element}
 */
export function SdgModule ({module}) {
    const {setSelectedModule} = useContext(SelectedModuleContext);

    const selectModule = () => {
        setSelectedModule(module);
    };

    return (
        <div className="module-container" onClick={selectModule}>
            <div className="module-preview"></div>
            <div className="module-name">{module.entry.name}</div>
        </div>
    );
}
