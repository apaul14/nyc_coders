

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
  find(val){
    let queue = [this.root]
    while (queue.length) {
      //console.log('shift -->', queue.shift())
      let current = queue.shift()
      console.log("current -->",current)
      if (current.val === val) {
        return true
      }
      if (current.val < val) {
        queue.push(current.left)
      } else {
        queue.push(current.right)
      }
    }
    return false
  }
}

let tree = new BST
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)
tree.find(9)

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