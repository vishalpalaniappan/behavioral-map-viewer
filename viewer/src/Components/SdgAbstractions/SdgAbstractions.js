import React, {useContext} from "react";

import sdgMetadata from "../../Data/library_manager_meta.json";
import sdg from "../../Data/library_manager_sdg.json";

import "./SdgAbstractions.scss";

SdgAbstractions.propTypes = {
};

/**
 * Component to display the abstractions in the SDG.
 * @return {JSX.Element}
 */
export function SdgAbstractions ({}) {
    console.log(sdgMetadata, sdg);
    return (
        <div id="abstractions-container">
            asdf
        </div>
    );
}
