import React, {useEffect, useState} from "react";

import {FlowDiagram} from "./Components/FlowDiagram/FlowDiagram";
import GlobalProviders from "./Providers/GlobalProviders";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

/**
 * Renders the application.
 *
 * @return {JSX.Element}
 */
export function App () {
    return (
        <GlobalProviders>
            <div className="vw-100 vh-100">
                <FlowDiagram />
            </div>
        </GlobalProviders>
    );
}
