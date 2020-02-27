class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex){
    this.adjacencyList[vertex] = []
  }
  addEdge(vert1, vert2){
    if (!this.adjacencyList[vert1].includes(vert2)) {
      this.adjacencyList[vert1].push(vert2)
    }
   
  }
}

let graph = new Graph

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addEdge(1,2)
graph.addEdge(1,3)


console.log(graph)



