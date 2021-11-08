//Write a function with one parameter(the array) 
    //Make sure the array only contains integers.
    //Make sure the array has a length of at least 3.
    //Separate the odd numbers from the even numbers.
        // create an array to hold even numbers
        // create an array to hold odd numbers
        // for every item in the array
            // if the item is divisible by 2 with 0 remainder
                // push item to the evens array
            // else 
                // push item to the odds array
        // if odds array > evens array
            //return evens array
        // else 
            //return odds array
let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let arr2 = [160, 3, 1719, 19, 11, 13, -21]

const findOutlier = (array) => {
  let evensArr = []
  let oddsArr = []
  for(let i = 0; i < array.length -1; i++){
    if(array[i] % 2 === 0){
      evensArr.push(array[i])
    } else {
      oddsArr.push(array[i])
    }
  }
  if(oddsArr.length > evensArr.length){
    return evensArr
  } else {
    return oddsArr
  }
}

let test = findOutlier(arr2)
console.log(test)