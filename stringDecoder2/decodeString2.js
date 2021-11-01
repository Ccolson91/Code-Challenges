// Write your code below this line
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const decodeString = (str) => {
  let wordArray = str.split('')
  let num = +wordArray[0]
  wordArray.shift()
  for(let i = 0; i < wordArray.length ; i++){
    for(let j = 0; j < letterArray.length ; j++){
      if(wordArray[i] === letterArray[j]){
        let wordArray = letterArray[j + num]
        // let newWord = wordArray.toString()
        console.log(wordArray)
      }
      
    }
  }

  // console.log(array)
  // console.log(num)
}

decodeString('2fcjjm')