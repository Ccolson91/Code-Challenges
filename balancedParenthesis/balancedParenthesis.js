// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const balancedParens = (str) => {
  let array = str.split('')
  for(let i = 0; i < array.length -1; i++){
    for(let j = array.length - 1; j > i; j--){
      if(array[i] === '(' || ')' && array[j] === ')' || '('){
        console.log('oh yea')
        i++
        
      } else if(array[i] !== '(' || ')' && array[j] !== ')' || '('){
        i++

      } else {
        console.log('doesnt work')
      }
    }
  }
  console.log('unbalanced')
}
balancedParens(sample2)