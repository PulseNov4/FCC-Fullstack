function findLongestWordLength(sentence){
  let longestLength = 0;
  let longestWord = "";
  for(let word of sentence.split(" ")){
    if(word.length > longestLength){
      longestWord = word;
      longestLength = word.length;
    }
  }
  return longestLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));