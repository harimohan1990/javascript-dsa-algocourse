function networkDelayTime(times, n, k) {
    let adjList = {}
    for(let t of times) {
      let s = t[0]
      let d = t[1]
      let time = t[2]

      if(adjList[s]) adjList[s].push([d, time])
      else adjList[s] = [[d, time]]
    }

    let visited = new Set()
    let tMap = {}
    dfs(adjList, k, visited, tMap, 0)
    
    if(Object.keys(tMap).length != n) return -1

    let minTime = -Infinity
    for(let node in tMap) {
      if(node == k) continue
      if(tMap[node] > minTime)
        minTime = tMap[node]
    }

    return minTime
}

function dfs(adjList, node, visited, tMap, d) {
  if(visited.has(node) && tMap[node] <= d) return

  visited.add(node)
  let neighbors = adjList[node]
  tMap[node] = d
  
  
  if(!neighbors) return

  for(let n of neighbors) {
    dfs(adjList, n[0], visited, tMap, d + n[1])
  }
}