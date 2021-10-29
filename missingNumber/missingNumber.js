const missingNum = (arr, maxNum) => {
  for(i = 0; i < maxNum; i++){
    if(!arr.includes(i +1)){
      return i + 1
    }
  }
}

console.log(missingNum([0, 1, 4, 3, 10, 5, 7, 2, 9], 10))