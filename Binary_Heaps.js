class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(value) {
    debugger
    this.values.push(value)

    let current = this.values.length-1
    let new_pos = Math.floor((current - 1) / 2) 

    while (current !== 0 && this.values[new_pos] < this.values[current]) {
      let temp1 = this.values[current]

      this.values[current] = this.values[new_pos]
      this.values[new_pos] = temp1

      current = new_pos
      new_pos = Math.floor((current - 1) / 2) 
    }
  }
}

//current pointer
  // check value against current node


  let newHeap = new MaxBinaryHeap
  newHeap.insert(5)
  console.log(newHeap)
  newHeap.insert(7)
  
  newHeap.insert(10)
  console.log(newHeap)
  newHeap.insert(12341235)
  
  newHeap.insert(57)
  console.log(newHeap)
  