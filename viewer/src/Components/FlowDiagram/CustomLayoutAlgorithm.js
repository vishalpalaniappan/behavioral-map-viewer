import sdgMeta from "../../Data/library_manager_meta.json";

const PRINT_TO_CONSOLE = true;
const INDENT_SPACES = 2;

export const applyCustomLayoutAlgorithm = (node) => {
    // This function will implement the custom layout algorithm for a
    // given node to visualize it in the viewer.

    console.log(node);
    if ("abstractions" in node) {
        visitLevel(node["abstractions"], 1);
    }
};

const visitLevel = (nodes, level) => {
    nodes.forEach((node, index) => {
        printToConsole(sdgMeta[node.id], level);
        if ("abstractions" in node) {
            visitLevel(node["abstractions"], level + 1);
        }
    });
};

const printToConsole = (meta, level) => {
    if (PRINT_TO_CONSOLE) {
        const spacer = " ".repeat(INDENT_SPACES).repeat(level);
        console.log(spacer, meta.intent);
    }
};