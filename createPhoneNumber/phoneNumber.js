const phoneNumber = array => {
  // let str = array.join('')
  for(let i = 0; i < array.length -1; i++){
    if(i === 0){
      array.unshift('(')
      array.join('')
    }
  }
  console.log(array)
}

const array1 = phoneNumber([2,2,5,6,5,4,2,5,4,9])

console.log(array1)

