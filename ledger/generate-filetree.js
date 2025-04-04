const fs = require("fs");
const path = require("path");

const generatePERNTree = (rootDir = process.cwd()) => {
  // Default PERN stack folders to include
  const mainFolders = ["blockchain", "client", "docs", "server"];
  const exclude = ["node_modules", ".git", ".DS_Store", "dist", "build"];

  const tree = {
    name: path.basename(rootDir),
    path: rootDir,
    type: "directory",
    children: [],
  };

  // Only process the main PERN folders plus any other top-level files
  const items = fs.readdirSync(rootDir);

  items.forEach((item) => {
    const fullPath = path.join(rootDir, item);
    const isDir = fs.statSync(fullPath).isDirectory();

    // Skip excluded items
    if (exclude.includes(item)) return;

    // Only process main folders or top-level files
    if (isDir && !mainFolders.includes(item)) return;

    const node = {
      name: item,
      path: fullPath,
      type: isDir ? "directory" : "file",
    };

    if (isDir) {
      node.children = buildFolderTree(fullPath, exclude);
    }

    tree.children.push(node);
  });

  return tree;
};

const buildFolderTree = (
  currentDir,
  exclude,
  currentDepth = 0,
  maxDepth = 4
) => {
  if (currentDepth >= maxDepth) return [];

  try {
    return fs
      .readdirSync(currentDir)
      .filter((item) => !exclude.includes(item))
      .map((item) => {
        const fullPath = path.join(currentDir, item);
        const stats = fs.statSync(fullPath);
        const isDir = stats.isDirectory();

        const node = {
          name: item,
          path: fullPath,
          type: isDir ? "directory" : "file",
        };

        if (isDir) {
          node.children = buildFolderTree(
            fullPath,
            exclude,
            currentDepth + 1,
            maxDepth
          );
        }

        return node;
      });
  } catch (err) {
    console.error(`Error reading directory ${currentDir}:`, err);
    return [];
  }
};

// Generate and display the tree
const projectTree = generatePERNTree();
console.log(JSON.stringify(projectTree, null, 2));

// If you want a visual ASCII tree output instead:
const printAsciiTree = (node, prefix = "") => {
  console.log(prefix + (prefix ? "└── " : "") + node.name);

  if (node.children) {
    node.children.forEach((child, index) => {
      const isLast = index === node.children.length - 1;
      printAsciiTree(child, prefix + (isLast ? "    " : "│   "));
    });
  }
};

console.log("\nASCII Tree Representation:");
printAsciiTree(projectTree);
