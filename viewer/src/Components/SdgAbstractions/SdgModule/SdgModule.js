import React, {useEffect, useState} from "react";

import PropTypes from "prop-types";

import "./SdgModule.scss";

SdgModule.propTypes = {
    module: PropTypes.object,
};

/**
 * Container holding the SDG Modules.
 * @return {JSX.Element}
 */
export function SdgModule ({module}) {
    useEffect(() => {
        console.log(module);
    }, [module]);
    return (
        <div className="module-container">
        </div>
    );
}
