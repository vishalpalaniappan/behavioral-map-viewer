import sdgMeta from "../../Data/library_manager_meta.json";

const PRINT_TO_CONSOLE = true;
const INDENT_SPACES = 2;

/**
 * Apply custom layout algorithm to visualize the
 * semantic design graph.
 * @param {Object} node
 */
export const applyCustomLayoutAlgorithm = (node) => {
    if ("abstractions" in node) {
        const levelWidth= visitLevel(node, 1);
        console.log("Level Width Final:", levelWidth);
    }

    console.log(node);
};

const visitLevel = (node, level) => {
    // Get the width of the current level through how many
    // conditional branches exist.
    let levelWidth = node["abstractions"].length;
    node["abstractions"].forEach((node, index) => {
        printToConsole(sdgMeta[node.id], level);
        if ("abstractions" in node && "type" in node && node["type"] === "conditional_branch") {
            levelWidth += visitLevel(node, level + 1);
        }
    });
    node.level = level;
    node.levelWidth = levelWidth - 1;
    return levelWidth;
};

const printToConsole = (meta, level) => {
    if (PRINT_TO_CONSOLE) {
        const spacer = " ".repeat(INDENT_SPACES).repeat(level);
        console.log(spacer, meta.intent);
    }
};
