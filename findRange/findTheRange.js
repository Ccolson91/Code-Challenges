// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let min = 0
let max = 0

for (let i=0; i<array.length; i++){
  if (array[i] < min){
    min = array[i]
  }
}

for (let i=0; i<array.length; i++){
  if (array[i] > max) {
    max = array[i]
  }
}

console.log(min);
console.log(max);