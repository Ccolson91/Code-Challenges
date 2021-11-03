// Write your solution below:

const removeDupe = (str) => {
  let strArray = str.split('')
  for(let i = 0; i < strArray.length; i++){
    for(let j = i + 1; j < strArray.length; j++){
      strArray.filter(() => {
        if(strArray[i] !== strArray[j]){
          j++
        } else {
          strArray.splice(j, 1)
        }
      }) 
    }
  }
  let newString = strArray.join('')
  console.log(newString)
}

removeDupe('helloworld')
// console.log(test)


//THIS ALSO WORKS...WHAAAAAAAT?!
// function makeUnique(str){
//   return String.prototype.concat(...new set(str))
// }

// console.log(makeUnique('eatmorechicken'));
// console.log(makeUnique('abcabc'));