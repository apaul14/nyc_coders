

class Node {
  constructor(val){
    this.val = val
    this.right = null
    this.right = null
  }
}

class BST {
  constructor(){
    this.root = null
  }






  // find(val){
  //   let queue = [this.root]
  //   while (queue.length) {
  //     //console.log('shift -->', queue.shift())
  //     let current = queue.shift()
  //     console.log("current -->",current)
  //     if (current.val === val) {
  //       return true
  //     }
  //     if (current.val < val) {
  //       queue.push(current.left)
  //     } else {
  //       queue.push(current.right)
  //     }
  //   }
  //   return false
  // }
  

}

let tree = new BST
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
//tree.find(9)

// BST.insert (val) {
//   let newNode = new Node(val)
//   if (!this.root) {
//     this.root = newNode
//     return this
//   }

//   let current = this.root

//   if (current.val > newNode.val) {
    
//   }


// }






console.log(tree)

// if (!queue.length) return visited Array

//let queue =  [root]

//check if there is queue.length
//shift first node off
//do the action
  //push into visited array
//check left of shifted, push that into queue
//check right of shifted, push into queue

// const BFS = tree => {
//   let queue = [tree.root]
//   let visited = []
  

//   if (!queue.length) {
//     return visited

//     } else {
//     let current = queue.shift()
//     console.log("current ->", current.val)

//     visited.push(current.val)

//     if (current.left) {
//       queue.push(current.left)
//       BFS(current)
//     }
//     if (current.right) {
//       queue.push(current.right)
//       BFS(current)
//     }
//   }
// }
  

//BFS(tree)

//create stack
//store root in current
// helper(node)
  //push node onto stack
  //if left helper(current.left)
  // helper (current.right)



const DFPO = tree => {
  let stack = [tree.root]
  let visited = []

  const helper = node => {
    if (node.left) {
      helper(node.left)
    }
    if (node.right) {
      helper(node.right)
    }
    visited.push(node.val)
  }

  if (stack.length) {
    helper(stack.pop())
  } else {
    return visited
  }
}

DFPO(tree)