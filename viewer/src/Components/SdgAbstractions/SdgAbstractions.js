import React, {useContext, useEffect, useState} from "react";

import SdgContext from "../../Providers/SdgContext";
import SelectedModuleContext from "../../Providers/SelectedModuleContext";
import {SdgModule} from "./SdgModule/SdgModule";

import "./SdgAbstractions.scss";

SdgAbstractions.propTypes = {
};

/**
 * Component to display the abstractions in the SDG.
 * @return {JSX.Element}
 */
export function SdgAbstractions ({}) {
    const {sdg} = useContext(SdgContext);
    const {setSelectedModule} = useContext(SelectedModuleContext);

    const [modules, setModules] = useState([]);

    useEffect(() => {
        if (sdg) {
            if ("modules" in sdg) {
                const modules = [];
                Object.keys(sdg.modules).forEach((key, index) => {
                    modules.push({
                        "key": key,
                        "index": index,
                        "entry": sdg.modules[key],
                    });
                });
                setModules(modules);
                setSelectedModule(modules[0]);
            } else {
                console.warn("Modules missing in sdg file.");
            }
        }
    }, [sdg]);

    return (
        <div id="abstractions-container">
            {modules.map((item, index) => (
                <SdgModule key={index} module={item} />
            ))}
        </div>
    );
}
