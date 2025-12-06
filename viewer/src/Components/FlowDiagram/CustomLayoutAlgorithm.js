import sdgMeta from "../../Data/library_manager_meta.json";

const PRINT_TO_CONSOLE = true;
const INDENT_SPACES = 2;

export const applyCustomLayoutAlgorithm = (node) => {
    // This function will implement the custom layout algorithm for a
    // given node to visualize it in the viewer.

    console.log(node);
    if ("abstractions" in node) {
        const levelWidth= visitLevel(node, 1);
        console.log("Level Width Final:", levelWidth);
    }
};

const visitLevel = (node, level) => {
    // Get the current level width, which is the number
    // of abstractions in this node.
    let levelWidth = node["abstractions"].length;
    node["abstractions"].forEach((node, index) => {
        printToConsole(sdgMeta[node.id], level);
        if ("abstractions" in node) {
            // Increase the level width by the childrens width
            levelWidth += visitLevel(node, level + 1);
        }
    });
    node.level = level;
    node.levelWidth = levelWidth;
    return levelWidth;
};

const printToConsole = (meta, level) => {
    if (PRINT_TO_CONSOLE) {
        const spacer = " ".repeat(INDENT_SPACES).repeat(level);
        console.log(spacer, meta.intent);
    }
};