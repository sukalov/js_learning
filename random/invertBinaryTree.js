
let tree = {
    left: {
        left:{
            left: 'right',
            right:{
                left: {},
                right: 'left'
            }
        },
        right:{
            left:{
                left: {
                    left: {},
                    right: {}
                },
                right: {}
            },
            right: {left: {}, right: {}}
            }
        },
    right :{
        left: 'hello VIM',
        right: {}
    }
}

const invertBinaryTree = (node) => {
    if (node.left && node.right) node = {left: node.right, right: node.left};

    if (node.left) node.left = invertBinaryTree(node.left);
    if (node.right) node.right = invertBinaryTree(node.right);

    return node
}

invertBinaryTree(tree)

console.dir(invertBinaryTree(tree), { depth: null })
/*

_ _ _ _ _ _ _ _ _ _
1 2 3 4 5 6 7 8 9 10

2 => нет в 1

*/


