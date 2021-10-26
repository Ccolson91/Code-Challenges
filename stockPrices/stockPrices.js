//write a function called best that returns maximum profit possible for buying and selling stock.

//Return the max possible profit on the stock the day

// function best(array){
//   let best = 0;
//   for(i = 0; i < array.length - 1; i++){
//     for(j = 1; j < array.length - 1; j++){
//       if(array[j] > array[i] && array[j] - array[i] > 0){ 
//         best = array[j] - array[i]
//       }
//     }
//   }
//   return best
// }
// let test = best([1, 3, 5, 2])
// console.log(test)

const best = prices => {
  let maxDiff = 0
  let lowSoFar

  for (let i = 0; i < prices.length; i++) {
    if (lowSoFar === undefined || prices[i] < lowSoFar) {
      lowSoFar = prices[i]
    }
    let diff = prices[i] - lowSoFar
    if (diff > maxDiff) {
      maxDiff = diff
    }
  }
  return maxDiff
}





// const stocks = [15, 10, 20, 22, 1, 9]

// const best = (stocks) => {
//   let best = 0
//   for(let i = 0; i < stocks.length; i++){
//     for(let j = i + 1; j < stocks.length; j++){
//       if(stocks[i] < stocks[j]){
//         if(stocks[j] - stocks[i] > best){
//           best = stocks[j] - stocks[i]
//         }
//       }
//     }
//   }
//   return best;
// }

// console.log(best(stocks))



