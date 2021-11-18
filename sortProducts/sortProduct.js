function sortProducts(arr){
  let newArray = []
  arr.forEach((element, index) => {
    let newElem = element * (index + 1)
    // console.log(newElem)
    newArray.push(newElem)
  })
  newArray.sort(function(a, b){return a-b})
  console.log(newArray)
  
  let sortedProducts = []
  

}

let test = sortProducts([23, 2, 3, 4, 5])
console.log(test)
