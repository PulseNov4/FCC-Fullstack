function mutation(arr){
  let sentence1 = arr[0];
  let sentence2 = arr[1];
  let map1 = new Map();
  let map2 = new Map();
  for(let chr of sentence1){
    if(map1.get(chr.toLowerCase()) != undefined){
      map1.set(chr.toLowerCase(), map1.get(chr.toLowerCase())+1);
    }else{
      map1.set(chr.toLowerCase(), 1);
    }
  }
  for(let chr of sentence2){
    if(map2.get(chr.toLowerCase()) != undefined){
      map2.set(chr.toLowerCase(), map2.get(chr.toLowerCase())+1);
    }else{
      map2.set(chr.toLowerCase(), 1);
    }
  }
  //console.log(map1);
  //console.log(map2);

  for(let key in map1.keys()){
    if(map2.get(key) == undefined){
      return false;
    }
  }
  for(let key of map2.keys()){
    console.log(key)
    if(map1.get(key) == undefined){
      return false;
    }
  }
  return true;
}
let result = mutation(["Alien", "lline"]);
console.log(result);

result = mutation(["hello", "neo"]);
console.log(result);

result = mutation(["hello", "hey"]);
console.log(result);