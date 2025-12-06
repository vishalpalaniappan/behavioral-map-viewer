import React, {useContext, useLayoutEffect, useState} from "react";

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
    const {selectedModule, setSelectedModule} = useContext(SelectedModuleContext);

    const [containerStyle, setContainerStyle] = useState();

    const selectModule = () => {
        setSelectedModule(module);
    };

    useLayoutEffect(() => {
        if (selectedModule == module) {
            setContainerStyle({border: "solid 1px #ef6161"});
        } else {
            setContainerStyle({});
        }
    }, [selectedModule]);

    return (
        <div className="module-container selected"  onClick={selectModule}>
            <div className="module-preview" style={containerStyle}></div>
            <div className="module-name">{module.entry.name}</div>
        </div>
    );
}
