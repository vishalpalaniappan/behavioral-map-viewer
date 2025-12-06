import React, {useContext, useEffect, useState} from "react";

import {MarkerType} from "@xyflow/react";
import {
    Controls,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    useReactFlow
} from "@xyflow/react";
import PropTypes, {nominalTypeHack} from "prop-types";

import SdgContext from "../../Providers/SdgContext.js";
import SelectedModuleContext from "../../Providers/SelectedModuleContext.js";
import {getLayoutedElements} from "./DagreLayout.js";
import example from "./exampleFlow.json";
import {getLayoutInfoFromTree} from "./helper.js";

import "@xyflow/react/dist/style.css";

Flow.propTypes = {
    tree: PropTypes.object,
};

const marker = {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
    color: "#FF0072",
};

const arrowStyle = {
    strokeWidth: 2,
    stroke: "#FF0072",
};

/**
 * Flow component which reners the dependency graph.
 * @param {Object} tree
 * @return {JSX.Element}
 */
export function Flow ({tree}) {
    const {fitView} = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    useEffect(() => {
        if (tree) {
            console.log(example);

            example.edges.forEach((edge, value) => {
                if (edge.style === "arrowStyle") {
                    edge.style = arrowStyle;
                }
                if (edge.markerEnd === "marker") {
                    edge.markerEnd = marker;
                }
            });

            setNodes(example.nodes);
            setEdges(example.edges);

            fitView();
        }
    }, [tree]);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            colorMode={"dark"}
            fitView
        >
            <Controls />
        </ReactFlow>
    );
};

/**
 *
 * @return {JSX.Element}
 */
export function FlowDiagram () {
    const [tree, setTree] = useState();

    const {sdg, sdgMetadata} = useContext(SdgContext);
    const {selectedModule} = useContext(SelectedModuleContext);

    useEffect(() => {
        if (selectedModule && sdg) {
            const map = sdg.modules[selectedModule.key];
            console.log("Loaded Map:", map);
            setTree(map);
        }
    }, [selectedModule]);

    return (
        <ReactFlowProvider>
            <Flow tree={tree} />
        </ReactFlowProvider>
    );
};
