function chunkArrayInGroups(arr, num){
  let chunks = [];
  let chunk = [];
  for(let i = 0; i < arr.length; i++){
    chunk.push(arr[i])
    if((i+1) % num == 0){
      chunks.push(chunk);
      chunk = []
    }
  }
  chunks.push(chunk)
  chunks = chunks.filter(chunk => chunk.length != 0)
  return chunks;
}
let result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(result);
result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
console.log(result);