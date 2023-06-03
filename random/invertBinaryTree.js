
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
        left: 'right',
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

function cas() {
    let a = 100
    let b = a
    let counter = 0
    while (a > 1) {
        a = a - (a * .2)
        b += a
        counter += 1
        console.log(a*.8)
    }

    return [b, counter]
}

console.log(cas())