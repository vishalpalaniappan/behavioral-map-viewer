import React, {useContext, useEffect, useState} from "react";

import {
    Controls,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    useReactFlow
} from "@xyflow/react";
import PropTypes from "prop-types";

import SdgContext from "../../Providers/SdgContext.js";
import SelectedModuleContext from "../../Providers/SelectedModuleContext.js";
import {getLayoutedElements} from "./DagreLayout.js";
import {getLayoutInfoFromTree} from "./helper.js";

import "@xyflow/react/dist/style.css";

Flow.propTypes = {
    tree: PropTypes.object,
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
            // const flowInfo = getLayoutInfoFromTree(tree.data, tree.animated ?? false);

            // // direction: TB, BT, LR, or RL,
            // // where T = top, B = bottom, L = left, and R = right.
            // const layouted = getLayoutedElements(
            //     flowInfo.nodes,
            //     flowInfo.edges,
            //     {
            //         direction: tree.orientation,
            //         ranksep: 70,
            //         nodesep: 250,
            //     }
            // );

            // setNodes([...layouted.nodes]);
            // setEdges([...layouted.edges]);

            // fitView();
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
