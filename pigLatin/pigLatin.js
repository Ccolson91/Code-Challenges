// Write your solution below:
// let testSentence = "These are words for testing pig latin"
// function pigLatin(testSentence){
//   let text = testSentence.split(' ')
//     if(text[0] !== ('a'||'e'||'i'||'o'||'u')){
//       text.push(text[0])
//       text.shift(text[0])
//       text.push('a', 'y')
//       console.log(text)
//       return text
//       } else {
//         text.push('y', 'a', 'y')
//         console.log(text)
//         return text
//       }
//     }
    
// pigLatin(testSentence)


function pigLatin(string){
  let stringIntoList = string.split(' ')
  let consonants = 'bcdfghjklmnpqrstvwxyz'
  // console.log(stringIntoList)
  for (let i = 0; i < stringIntoList.length; i++){
    // console.log(stringIntoList[i])
    if (consonants.includes(stringIntoList[i][0])){
      stringIntoList[i] = stringIntoList[i].slice(1) + stringIntoList[i][0] + 'ay'
      // console.log(fixedWord)
    } else {
      stringIntoList[i] = stringIntoList[i] + 'yay'
      // console.log(fixedVowelWord)
    }
  }
  // console.log(stringIntoList)
  let result = stringIntoList.join(' ')
  console.log(result)
  return result
}
pigLatin("break this string into pieces")