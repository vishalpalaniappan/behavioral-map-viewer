import React, {useContext, useEffect} from "react";

import SdgContext from "../../Providers/SdgContext";

import "./SdgAbstractions.scss";

SdgAbstractions.propTypes = {
};

/**
 * Component to display the abstractions in the SDG.
 * @return {JSX.Element}
 */
export function SdgAbstractions ({}) {
    const {sdg, sdgMetadata} = useContext(SdgContext);

    useEffect(() => {
        if (sdg) {
            console.log("Sdg:", sdg);
        }
    }, [sdg]);

    useEffect(() => {
        if (sdg) {
            console.log("Sdg Metadata:", sdgMetadata);
        }
    }, [sdgMetadata]);

    return (
        <div id="abstractions-container">
            
        </div>
    );
}
