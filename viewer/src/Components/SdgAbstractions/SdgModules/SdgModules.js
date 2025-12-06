import React, {useEffect, useState} from "react";

import PropTypes from "prop-types";

import "./SdgModules.scss";

SdgModules.propTypes = {
    modules: PropTypes.array,
};

/**
 * Container holding the SDG Modules.
 * @return {JSX.Element}
 */
export function SdgModules ({modules}) {
    useEffect(() => {

    }, [modules]);
    return (
        <div id="modules-container">
        </div>
    );
}
