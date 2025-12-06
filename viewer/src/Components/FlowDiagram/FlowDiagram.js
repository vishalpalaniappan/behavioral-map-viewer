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
            const flowInfo = getLayoutInfoFromTree(tree.data, tree.animated ?? false);

            // direction: TB, BT, LR, or RL,
            // where T = top, B = bottom, L = left, and R = right.
            const layouted = getLayoutedElements(
                flowInfo.nodes,
                flowInfo.edges,
                {
                    direction: tree.orientation,
                    ranksep: 70,
                    nodesep: 250,
                }
            );

            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);

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

    useEffect(() => {
        const obj = {};
        obj["orientation"] = "TB";
        obj["data"] = {
            "branch1": ["a", "b", "c", "p"],
            "branch2": ["a", "b", "d", "x"],
            "branch3": ["a", "f", "g", "x"],
        };
        setTree(obj);
    }, []);

    return (
        <ReactFlowProvider>
            <Flow tree={tree} />
        </ReactFlowProvider>
    );
};
